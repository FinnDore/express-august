const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.get('/', async (req, res) => {
    res.json({ Hello: '💀💀💀💀💀💀💀💀💀💀' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://💀💀:${port}`);
});
