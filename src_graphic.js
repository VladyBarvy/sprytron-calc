
function processFiles(files) {
    var file = files[0];
    var reader = new FileReader();

    

    reader.onload = function (e) {
        var output = document.getElementById("fileOutput");   
        // output.textContent = e.target.result;
        let poop = e.target.result;
        let oppa = poop.split('@');
        //output.textContent = oppa[0];


        let q1 = [];
        let pom = [];

        for(let i = 0; i < oppa.length; i += 1) {
            q1 = oppa[i].split('|');
            pom.push(q1);
        }


        let q2 = 0;
        let q3 = 0;
        let pom2 = [];
        let quick = [];

        for(let i = 0; i < pom.length; i += 1) {
            let q2 = pom[i][1];
            let q3 = pom[i][3];

            let pom2 = []; 
            pom2.push(q2, q3);

            quick.push(pom2);   
        }


        // output.textContent = quick; // отображение надписи на экране



        var dataSet = anychart.data.set(quick);


        var firstSeriesData = dataSet.mapAs({x: 0, value: 1});



        const fileUploader = document.getElementById('fileInput');

        fileUploader.addEventListener('change', (event) => {
            const files = event.target.files;
            console.log('files', files);
        });

        

 
        const chart = anychart.line();
        chart.line(firstSeriesData);
        chart.yScale(anychart.scales.linear());

        chart.yAxis().staggerMode(true);

        chart.yAxis().staggerMaxLines(20);

        

        chart.xAxis().title("Время");
        chart.yAxis().title("Температура");

        //chart.title("Временной график температуры");
        chart.container("container");
        chart.draw();

        chart.xScroller(true);
        chart.yScroller(true);
        
        

    };

    reader.readAsText(file);  

};


const app = () => {
   processFiles(files);
};

app();
