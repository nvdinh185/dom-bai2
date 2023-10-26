const listHoa = [
    {
        id: 1,
        tenHoa: 'Hoa Phong Lan',
        loaiHoa: 'Khai trương',
        hinhAnh: 'hoa1.jpg'
    },
    {
        id: 2,
        tenHoa: 'Hoa tỷ muội',
        loaiHoa: 'Khai trương',
        hinhAnh: 'hoa2.jpg'
    },
    {
        id: 3,
        tenHoa: 'Hoa Violet',
        loaiHoa: 'Hoa kỷ niệm',
        hinhAnh: 'hoa3.jpg'
    },
    {
        id: 4,
        tenHoa: 'Hoa thủy tiên',
        loaiHoa: 'Hoa tình yêu',
        hinhAnh: 'hoa4.jpg'
    },
    {
        id: 5,
        tenHoa: 'Hoa cẩm chướng',
        loaiHoa: 'Hoa hạnh phúc',
        hinhAnh: 'hoa5.jpg'
    }
]

var h3Element = document.querySelector('h3');
h3Element.innerText = 'Danh sách hoa';

const tbElement = document.querySelector('#tbl');

// Tiêu đề
var htmls = `
    <thead>
        <tr>
            <th>ID</th>
            <th>Tên hoa</th>
            <th>Loại hoa</th>
            <th>Hình ảnh</th>
        </tr>
    </thead>
    `;

// Nội dung
htmls += '<tbody>';
for (const hoa of listHoa) {
    htmls += `
    <tr>
        <td>${hoa.id}</td>
        <td><a href="#" title="${hoa.tenHoa}">${hoa.tenHoa}</a></td>
        <td>${hoa.loaiHoa}</td>
        <td>
            <img src = 'images/${hoa.hinhAnh}' alt = '${hoa.hinhAnh}' />
        </td>
    </tr>`;
}
htmls += '</tbody>';

tbElement.innerHTML = htmls;