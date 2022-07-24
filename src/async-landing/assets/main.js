const API ='https://youtube-v31.p.rapidapi.com/search?channelId=UCuBYkBL4dVMIbh9Z9CZpofA&part=snippet%2Cid&order=date&maxResults=8';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f59f03538msh75372667ba93bf8p12beadjsn3aa756e70e9e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () =>{//Esta forma de escribir (...)(); es la manera de escribir una función que se ejecutará tan pronto se cargue el archivo .js
    try{
        const videos = await fetchData(API);
        //Template que se iterará para cada respuesta
        let view = `
            ${videos.items.map(video => `        
                <div class="group relative">
                    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `).slice(0,8).join('')}
         `;
         content.innerHTML = view;
    }catch(error){
        console.error(error);
    }
})();