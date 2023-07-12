const listHoa = [
    {
        id: 1,
        tenHoa: 'Hoa Phong Lan',
        loaiHoa: 'Khai trương',
        hinhAnh: 'images/hoa1.jpg'
    },
    {
        id: 2,
        tenHoa: 'Hoa tỷ muội',
        loaiHoa: 'Khai trương',
        hinhAnh: 'images/hoa2.jpg'
    },
    {
        id: 3,
        tenHoa: 'Hoa Violet',
        loaiHoa: 'Hoa kỷ niệm',
        hinhAnh: 'images/hoa3.jpg'
    },
    {
        id: 4,
        tenHoa: 'Hoa thủy tiên',
        loaiHoa: 'Hoa tình yêu',
        hinhAnh: 'images/hoa4.jpg'
    },
    {
        id: 5,
        tenHoa: 'Hoa cẩm chướng',
        loaiHoa: 'Hoa hạnh phúc',
        hinhAnh: 'images/hoa5.jpg'
    }
]

var h3Element = document.querySelector('h3');
h3Element.innerText = 'Danh sách hoa';

const tbElement = document.querySelector('#tbl');

// Tiêu đề
const htmlsTitle = `
    <thead>
        <tr>
            <th>ID</th>
            <th>Tên hoa</th>
            <th>Loại hoa</th>
            <th>Hình ảnh</th>
        </tr>
    </thead>
    `;

tbElement.innerHTML = htmlsTitle;

// Nội dung
var htmlsContents = '';
for (const hoa of listHoa) {
    htmlsContents += `
    <tr>
        <td>${hoa.id}</td>
        <td><a href="#" title="${hoa.tenHoa}">${hoa.tenHoa}</a></td>
        <td>${hoa.loaiHoa}</td>
        <td>
            <img src = '${hoa.hinhAnh}' alt = '${hoa.hinhAnh}' />
        </td>
    </tr>`;
}

tbElement.innerHTML += '<tbody>' + htmlsContents + '</tbody>';