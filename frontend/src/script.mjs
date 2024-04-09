const fetchDataFromServer = async () => {
    const res = await fetch('http://127.0.0.1:5000/', { methods: 'GET', credentials: 'include' });
    const data = await res.json();
    console.log(data);
};

fetchDataFromServer();
