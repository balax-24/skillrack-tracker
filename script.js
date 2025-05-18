
window.addEventListener('load', () => {
  clearPreviousResults();

  const storedUrl = localStorage.getItem('url');
  if (storedUrl) {

    document.getElementById('url-input').style.display = 'none';

    document.getElementById('loading-message').style.display = 'block';

    fetchPoints(storedUrl);
  }
});


document.getElementById('submit-btn').addEventListener('click', async () => {
  localStorage.setItem('url', url);


  clearPreviousResults();

  try {
    await fetchPoints(url);
  } catch (err) {
    document.getElementById('loading-message').style.display = 'none';
    alert('Failed to fetch data. Please try again.');
  }
});


//To be Filled


async function fetchPoints(url) {
  try {
  
    // To be Filled
    saveDataToExcel(data);
  } catch (err) {
    alert('Failed to fetch data. Please try again.');
  }
}


function saveDataToExcel(data) {
  //To be Filled
  ];

  const sheet = XLSX.utils.json_to_sheet(resultData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, sheet, 'Results');


  const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const fileBase64 = btoa(String.fromCharCode(...new Uint8Array(excelFile)));
  localStorage.setItem('excelFile', fileBase64);  
}

document.getElementById('detailed-analysis-btn').addEventListener('click', () => {
  const detailSection = document.getElementById('detailed-analysis');
  detailSection.style.display = detailSection.style.display === 'none' ? 'block' : 'none';
});


document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});


document.getElementById('copy-btn').addEventListener('click', () => {
    .then(() => alert('Copied to clipboard!'))
    .catch(() => alert('Failed to copy.'));
});


function loadExcelFromLocalStorage() {
  const fileBase64 = localStorage.getItem('excelFile');
  if (fileBase64) {

    const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

    //To be Filled

    document.getElementById('results').style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadExcelFromLocalStorage();
});
