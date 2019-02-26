var express = require("express");
var app = express();

app.use(express.static("public"));

app.listen("1209",function(){
	console.log("Ket noi thanh cong.");
});

app.get("thuc-don",function(req,res){
	var pizza = {
		status: 1,
		massage: 'success',
		pizza: [
			{
				ten: "MEAT LOVERS",
				mo_ta: "Xúc xích Peperoni, Thịt dăm bông, Xúc xích Ý, Thịt bò viên, Thịt heo muối"
			},
			{
				ten: "EXTRAVAGANZA",
				mo_ta: "Xúc xích kiểu Ý, Thịt bò viên, Xúc xích Pepperoni"
			},
			{
				ten: "PRIME BEEF",
				mo_ta: "Bò viên kiểu Ý, Thịt bò xé"
			},
			{
				ten: "SINGAPORE SEAFOOD",
				mo_ta: "Tôm, Cua, Sốt Singpore"
			},
			{
				ten: "ALMOND CITRUS SEAFOOD",
				mo_ta: "Tôm, Sò điệp, Hạnh nhân"
			}
		]
	}

	var banh_mi = {
		status: 1,
		massage: 'success',
		banh_mi: [
			{
				ten: "Bánh mì Heo quay",
				mo_ta: "Pate, Mayonnaise, Đu đủ, Cà rốt, Rau thơm, Dưa chuột, Thịt heo quay, Ớt chưng, Sốt gia truyền"
			},
			{
				ten: "Bánh mì Gà nướng",
				mo_ta: "Pate, Mayonnaise, Đu đủ, Cà rốt, Rau thơm, Dưa chuột, Thịt gà nướng sả, Ớt chưng, Sốt gia truyền"
			},
			{
				ten: "Bánh mì Đặc biệt",
				mo_ta: "Pate, Mayonnaise, Đu đủ, Cà rốt, Rau thơm, Dưa chuột, Thịt xá xíu, Ớt chưng, Sốt gia truyền"
			},
			{
				ten: "Bánh mì Pate trứng",
				mo_ta: "Pate, Mayonnaise, Đu đủ, Cà rốt, Rau thơm, Dưa chuột, Trứng, Ớt chưng, Sốt gia truyền"
			}
		]
	}

	var my = {
		status: 1,
		massage: 'success'
		my:[
			{
				ten: "Spaghetti Bolognaise",
				mo_ta:"Mỳ Ý sợi dài với xốt thịt bò cà chua"
			},
			{
				ten: "Spaghetti Seafood",
				mo_ta:"Mỳ Ý sợi dài với hải sản. Lựa chọn: xốt cà chua cay hoặc xốt kem tỏi"
			},
			{
				ten: "Steak & Mushroom Spaghetti",
				mo_ta:"Mỳ Ý sợi dài với thịt bò Úc, nấm & xốt kem đậu đen"
			},
			{
				ten: "Salmon Spaghetti",
				mo_ta:"Mỳ Ý sợi dẹt với cá hồi, măng tây và xốt kem"
			}
		]
	}
})
