

function find() {
    let result = document.getElementById("result");
    let form = document.querySelector('#form');
    let submit = document.querySelector('#submit');
    let query_name = document.querySelector('#query_name');
    let title = document.querySelector('#title');
    let leechers = document.querySelector('#leechers');
    let seeders = document.querySelector('#seeders');
    let size = document.querySelector('#size');
    let magnet = document.querySelector('#magnet');
    magnet.disabled = true;
        let query = document.querySelector('#query').value;
        const api = fetch('https://api.sumanjay.cf/torrent/?query='+query).then((apidata) => {
            return apidata.json();
        }).then((actualdata) => {
            query_name.textContent ="You searched for " + `${query}` ;
            result.classList.replace('d-none','d-block');
            title.textContent = "Title : "+ actualdata[0].name;
            leechers.textContent = "Leechers : " + actualdata[0].leecher;
            seeders.textContent = "Seeders : " + actualdata[0].seeder;
            size.textContent = "Size  : " + actualdata[0].size;
            magnet.value = actualdata[0].magnet;
        })
        };

        const copy = () =>{
            let magnet = document.getElementById('magnet'); 
        //     magnet.select();
        //     magnet.setSelectionRange(0, 99999);
        //     document.execCommand('copy');
        navigator.clipboard.writeText(magnet.value).then(()=>{
            swal("Success","Magnet URL copied to to clipboard!","success");
        });
    }
