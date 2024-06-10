const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

app.use('/api/posts', postRoutes);

app.use('/api/auth', authRoutes);