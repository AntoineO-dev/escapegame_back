const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configuration de multer pour le stockage des fichiers
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/images';
        // Créer le répertoire s'il n'existe pas
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Générer un nom de fichier unique avec timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    }
});

// Filtre pour accepter uniquement les images
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Seules les images sont autorisées'), false);
    }
};

// Configuration de l'upload
const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});

// Route pour uploader une image
router.post('/', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Aucun fichier n\'a été téléchargé' });
        }

        // Créer l'URL de l'image pour accès depuis le client
        const imageUrl = `/uploads/images/${req.file.filename}`;

        // Si un ID d'escape game est fourni, associez l'image
        const id_escape = req.query.escapegame_id;
        if (id_escape) {
            try {
                const connection = require('../config/bdd');
                const [result] = await connection.promise().query(
                    'UPDATE escape_games SET image_url = ? WHERE id_escape = ?',
                    [imageUrl, id_escape]
                );

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: 'Escape game non trouvé' });
                }

                return res.status(200).json({
                    message: 'Image téléchargée et associée avec succès',
                    imageUrl: imageUrl,
                    escapegameId: id_escape
                });
            } catch (dbError) {
                console.error('Erreur de base de données:', dbError);
                return res.status(500).json({ message: 'Erreur lors de l\'association avec l\'escape game' });
            }
        }

        // Si aucun ID n'est fourni, retournez simplement l'URL de l'image
        res.status(200).json({
            message: 'Image téléchargée avec succès',
            imageUrl: imageUrl,
            file: req.file
        });
    } catch (error) {
        console.error('Erreur lors du téléchargement:', error);
        res.status(500).json({ message: 'Erreur lors du téléchargement du fichier' });
    }
}
);

router.post('/escapegame/:id_escape', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Aucun fichier n\'a été téléchargé' });
        }

        // Créer l'URL de l'image pour accès depuis le client
        const imageUrl = `/uploads/images/${req.file.filename}`;

        res.status(200).json({
            message: 'Image téléchargée avec succès',
            imageUrl: imageUrl,
            file: req.file
        });
    } catch (error) {
        console.error('Erreur lors du téléchargement:', error);
        res.status(500).json({ message: 'Erreur lors du téléchargement du fichier' });
    }
}
);

module.exports = router;