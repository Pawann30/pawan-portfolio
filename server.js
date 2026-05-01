const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

const projects = {
    'pawscan-ai': {
        title: 'PawScan AI — Dog Skin Disease Detection',
        date: 'Oct 2025 — Dec 2025',
        github: 'https://github.com/Pawann30/Dog-Skin-Inefection-Prediction',
        tags: ['Python', 'TensorFlow', 'Flask', 'MobileNetV2'],
        description: 'Image classification system using MobileNetV2 transfer learning for canine skin disease detection.',
        highlights: [
            'Fine-tuned CNN with <strong>MobileNetV2</strong> to identify <strong>6 canine skin diseases</strong> — <strong>89% accuracy</strong>.',
            'Dataset of <strong>2400+ labelled images</strong> with augmentation (rotation, zoom, flip).',
            '<strong>RAG-based</strong> veterinary assistant using <strong>TF-IDF</strong> vectorization.',
            '<strong>Flask full-stack app</strong> with real-time identification at <strong>200ms latency</strong>.'
        ]
    },
    'speech-emotion': {
        title: 'Speech Emotion Recognition',
        date: 'Sep 2025 — Jan 2026',
        github: 'https://github.com/Pawann30/Speech-Emotion-Recognition',
        tags: ['Python', 'Librosa', 'MFCC', 'Deep Learning'],
        description: 'Audio classification system recognizing emotional states from speech.',
        highlights: [
            '<strong>2,000+ audio files</strong> from RAVDESS/SAVEE, normalized to <strong>22,050 Hz</strong>.',
            'Custom pipeline with <strong>6 features</strong>: MFCC, Chroma, Spectral Centroid, Contrast, ZCR, RMS.',
            'Optimized <strong>4 emotional states</strong> with batch directory post-processing.'
        ]
    },
    'kidney-stone': {
        title: 'Kidney Stone Detection — Deep Computer Vision',
        date: 'Nov 2024 — Jan 2025',
        github: 'https://github.com/Pawann30/Kidney-Stone-Detection',
        tags: ['Python', 'PyTorch', 'Flask', 'ResNet18'],
        description: 'Deep learning framework for kidney stone detection from X-ray images.',
        highlights: [
            '<strong>ResNet18</strong> at <strong>88.8%</strong> and <strong>EfficientNetB0</strong> at <strong>82.45%</strong> accuracy.',
            '<strong>6000+ X-ray images</strong> with preprocessing and augmentation.',
            'Flask API reducing clinical trial timing by <strong>40%</strong>.'
        ]
    },
    'quizera': {
        title: 'QuizEra — Java Quiz Hosting Platform',
        date: 'Mar 2025 — May 2025',
        github: 'https://github.com/Pawann30/QuizEra',
        tags: ['Java', 'JDBC', 'SQL'],
        description: 'Scalable online quiz system with automated evaluation.',
        highlights: [
            'Built with <strong>Java, JDBC</strong> and optimized SQL — <strong>100+ simultaneous sessions</strong>.',
            'Automated evaluation reducing <strong>85%</strong> manual grading, <strong>30%</strong> better completion.'
        ]
    }
};

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/project/:slug', (req, res) => {
    if (!projects[req.params.slug]) return res.status(404).send('Not found');
    res.sendFile(path.join(__dirname, 'pages', 'project.html'));
});

app.get('/api/project/:slug', (req, res) => {
    const p = projects[req.params.slug];
    if (!p) return res.status(404).json({ error: 'Not found' });
    res.json(p);
});

app.get('/essay', (req, res) => res.sendFile(path.join(__dirname, 'pages', 'essay.html')));
app.get('/introduction', (req, res) => res.sendFile(path.join(__dirname, 'pages', 'introduction.html')));

app.listen(PORT, () => console.log(`\n  Portfolio running at http://localhost:${PORT}\n`));
