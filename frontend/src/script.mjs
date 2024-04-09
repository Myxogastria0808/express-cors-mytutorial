const fetchDataFromServer = async () => {
    const res = await fetch('http://localhost:5000/', { methods: 'GET' });
    const data = await res.json();
    console.log(data);
};

fetchDataFromServer();
