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

var h3Element = $('h3');
h3Element.text('Danh sách sản phẩm');

const tbElement = $('#tbl');

var trElement = $('<tr>');
// Tiêu đề
const htmlsTitle = `
        <th>ID</th>
        <th>Tên hoa</th>
        <th>Loại hoa</th>
        <th>Hình ảnh</th>
    `;

trElement.html(htmlsTitle);
tbElement.append(trElement);

// Nội dung
for (const hoa of listHoa) {
    var tr2Element = $('<tr>');
    var htmlsContents = `
        <td>${hoa.id}</td>
        <td><a href="#" title="${hoa.tenHoa}">${hoa.tenHoa}</a></td>
        <td>${hoa.loaiHoa}</td>
        <td>
            <img src = '${hoa.hinhAnh}' alt = '${hoa.hinhAnh}' />
        </td>`;
    tr2Element.html(htmlsContents);
    tbElement.append(tr2Element);
}