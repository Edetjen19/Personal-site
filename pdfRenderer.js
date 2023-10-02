// Assuming PDF.js's viewer is available
document.addEventListener("DOMContentLoaded", function() {
    
    function renderPDF(url, canvasContainer) {
        pdfjsLib.getDocument(url).promise.then(function(pdf) {
            var pageNumber = 1; // start with the first page
            pdf.getPage(pageNumber).then(function(page) {
                
                var scale = 1.5; // you can adjust this value as needed
                var viewport = page.getViewport({ scale: scale });

                var canvas = document.createElement('canvas');
                canvasContainer.appendChild(canvas);
                
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);
            });
        });
    }

    var pdfURL = 'assets/Eric_Detjen_PM_Resume_08_30_23.pdf'; // Replace with the direct download link to your PDF.
    var canvasContainer = document.querySelector('.pdf-container');
    
    if (canvasContainer) {
        renderPDF(pdfURL, canvasContainer);
    }
});
