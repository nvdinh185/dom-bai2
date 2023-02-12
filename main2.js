const tbElement = document.querySelector('#tbl');

// Tiêu đề
const htmlsTitle = `
    <thead>
        <tr>
            <th>ID</th>
            <th>Tên hoa</th>
            <th>Loại hoa</th>
            <th>Hình ảnh</th>
            <th>Chức năng</th>
        </tr>
    </thead>
    `;

tbElement.innerHTML = htmlsTitle;

const listHoa = [
    {
        id: 1,
        tenHoa: 'Hoa Phong Lan',
        loaiHoa: 'Khai trương',
        hinhAnh: 'images/tmp/hoa1.jpg'
    },
    {
        id: 2,
        tenHoa: 'Hoa tỷ muội',
        loaiHoa: 'Khai trương',
        hinhAnh: 'images/tmp/hoa2.jpg'
    },
    {
        id: 3,
        tenHoa: 'Hoa Violet',
        loaiHoa: 'Hoa kỷ niệm',
        hinhAnh: 'images/tmp/hoa3.jpg'
    },
    {
        id: 4,
        tenHoa: 'Hoa thủy tiên',
        loaiHoa: 'Hoa tình yêu',
        hinhAnh: 'images/tmp/hoa4.jpg'
    },
    {
        id: 5,
        tenHoa: 'Hoa cẩm chướng',
        loaiHoa: 'Hoa hạnh phúc',
        hinhAnh: 'images/tmp/hoa5.jpg'
    }
]

// Nội dung
var htmlsContents = '';
listHoa.forEach(function (hoa) {
    htmlsContents += `
        <tr>
            <td>${hoa.id}</td>
            <td>${hoa.tenHoa}</td>
            <td>${hoa.loaiHoa}</td>
            <td>
                <img src = '${hoa.hinhAnh}' alt = '${hoa.hinhAnh}' />
            </td>
            <td>
                <a href = '#' title = 'Sửa'><img src = 'images/pencil.gif' alt = 'images/pencil.gif'>Sửa</a>
                <a href = '#' title = 'Xóa'><img src = 'images/bin.gif' alt = 'images/bin.gif'>Xóa</a>
            </td>
        </tr>
        `;
})

tbElement.innerHTML += '<tbody>' + htmlsContents + '</tbody>';