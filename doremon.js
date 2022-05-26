// JavaScript Document
var img = 1;
function trangchu()
{
	window.location.href='index.html';
}
function display()
{
	document.getElementById("teto").style.display="block";
	document.getElementById("teto1").style.display="block";
	
}
function notdisplay()
{
	document.getElementById("teto").style.display="none";
	document.getElementById("teto1").style.display="none";
}

// DANH MUC NHAN HIEU
var danhmuc = [
 				   {name:'Nike',key:'nike'},
 				   {name:'Adidas',key:'adidas'},
 				   {name:'Jordan',key:'jordan'},
 				   {name:'Yeezy',key:'yeezy'},
				   
 				];
	//------------------------			
				

// DANH SACH SAN PHAM 
function sanpham(masp, tensp, gia,mau,hinh,matheloai,mota,size,price) {
  this.masp = masp;
  this.tensp = tensp;
  this.gia = gia;
  this.mau=mau;
  this.hinh=hinh;
  this.theloai=matheloai;
    this.mota = mota;
    this.size = size;
  this.price=price;
}
var sp=new Array();
var sp = new Array();
sp[0] = new sanpham("ADD001", "SUPER-STAR", " 1.800.000", "Trắng", "img/adidas/super-star.png", "adidas", "Nữ","38,39", 1800000);
sp[1] = new sanpham("ADD002", "STAN SMITH VALENTINE", " 2.200.000", "Trắng  ", "img/adidas/stan-smith-valentine.png", "adidas", "Nam","40,41,42", 2200000);
sp[2] = new sanpham("NIK001", "NIKE AIR  MAX 97", " 3.300.000", "Trắng", "img/nike/nike-air-max-97.jpg", "nike", "Nam","41", 3300000);
sp[3] = new sanpham("NIK002", "Nike Air Max 270 Photo", " 4.200.000", "Trắng", "img/nike/Nike-Air-Max-270-Photo-Blue.jpg", "nike", "Nam", "40,41,42",4200000);
sp[4] = new sanpham("ADD003", "ADIDAS NMD R1 BLACK", " 3.500.000", "Đen", "img/adidas/adidas-NMD-R1-black.png", "adidas", "Nam","41,42", 3500000);
sp[5] = new sanpham("ADD004", "STAN SMITH FULL WHITE ", " 1.500.000", "Trắng", "img/adidas/stan-smith-white.png", "adidas", "Nữ,","38,39", 1500000);
sp[6] = new sanpham("NIK003", "NKE AIR MAX 270", " 4.200.000", "Đen", "img/nike/nike-air-max-270.jpg", "nike", "Nam","40,41,42", 4200000);
sp[7] = new sanpham("ADD005", "ADIDAS PROPHERE", " 5.000.000", "Xám", "img/adidas/adidas-prophere-xám.jpg", "adidas", "Nam","40,41,42", 5000000);
sp[8] = new sanpham("JOR001", "AIR JORDAN 4 LAVA", " 8.200.000", "Trắng", "img/jordan/Air-jordan-4-lava.jpg", "jordan", "Nam","40,41,42", 8200000);
sp[9] = new sanpham("JOR002", "JORDAN 1 HIGH GYM RED", " 10.000.000", "Đen", "img/jordan/jordan-1-high-gym-red.jpg", "jordan", "Nữ","38,39,", 10000000);
sp[10] = new sanpham("YEE001", "YEEZY 500 SALT", " 12.000.000 VND", "Trắng", "img/yeezy/yeezy-500-salt.jpg", "yeezy", "Nam","38,39,", 12000000);
sp[11] = new sanpham("YEE002", "YEEZY BOOST 700", " 15.000.000", "Xám", "img/yeezy/yezzy-boost-700-v2-inertia.jpg", "yeezy", "Nữ","38,39", 15000000);
sp[12] = new sanpham("JOR003", "JORDAN 3 RETRO WOLF", " 8.000.000", "Đen", "img/jordan/jordan-3-retro-wolf-grey.jpg", "jordan", "Nữ","38,39", 8000000);
sp[13] = new sanpham("JOR004", "JORDAN 4 RETRO", " 7.000.000", "Đen", "img/jordan/jordan-4.jpg", "jordan", "Nam","41,42", 7000000);
sp[14] = new sanpham("NIK004", "NIKE AIR FORCE 1 SAGE", " 5.000.000", "Trắng", "img/nike/nike-air-force-1-sage-low-lx.jpg", "nike", "Nam","41,42", 5000000);
sp[15] = new sanpham("NIK005", "NIKE JOYRIDE RUN FX", " 6.500.000", "Trắng", "img/nike/nike-joyride-run-fx.jpg", "nike", "Nam","40,41,42", 6500000);
sp[16] = new sanpham("NIK006", "NIKE AIR FORCE 1'07", " 2.600.000", "Trắng", "img/nike/air-force-1'07.png", "nike", "Nam","41,42" ,2600000);
sp[17] = new sanpham("ADD006", "ADIDAS POD CS3,1", " 2.500.000", "Trắng,Đen", "img/adidas/7437bb54bbbaa932f6f5d93ad1a244e9.jpg", "adidas", "Nam", "42,43,44", 2500000);
sp[18] = new sanpham("ADD007", "ADIDAS EQT BASK WHITE", " 2.800.000", "Trắng,Đen", "img/adidas/adidas-eqt-bask-adv-trang-xanh-replica.jpg", "adidas", "Nữ", "37,38,39",2800000);
sp[19] = new sanpham("ADD008", "ADIDAS NMD R1 CAMO", " 1.800.000", "Xanh", "img/adidas/adidas-nmd-xr1-xanh-camo-sf.jpg", "adidas", "Nam", "41,42,43,44", 1800000);
sp[20] = new sanpham("ADD009", "ADIDAS TUBULAR XÁM", " 3.800.000", "Xám", "img/adidas/adidas-tubular-shadow-grey-sf.jpg", "adidas", "Nam", "40,41,42",3800000);
sp[21] = new sanpham("ADD010", "ADIDAS XPLR XÁM", " 4.000.000", "Xám", "img/adidas/adidas-xplr-grey-sf.jpg", "adidas", "Nam", "40,41,42", 4000000);
sp[22] = new sanpham("NIK007", "AIR MAX SPEED TURF", " 5.500.000", "Vàng", "img/nike/61DWWYZswmL._UL1000_.jpg", "nike", "Nam", "43,44,45", 5500000);
sp[23] = new sanpham("NIK008", "AIR MAX 720 RED", " 7.800.000", "Đỏ", "img/nike/71joxGrPP2L._UY395_.jpg", "nike", "Nam", "42,43,45", 7800000);
sp[24] = new sanpham("NIK009", "AIR MAX 270 PREMIUM", " 4.300.000", "Đen", "img/nike/download.jpg", "nike", "Nam", "41,43", 4300000);
sp[25] = new sanpham("NIK0010", "AIR MAX 270 ALL WHITE", " 3.300.000", "Trắng", "img/nike/img_1226_1.jpg", "nike", "Nữ", "39,38,37", 3300000);
sp[26] = new sanpham("JOR005", "JORDAN 3 TINKER ĐEN", " 4.000.000", "Đen", "img/jordan/Q0571_0071_right3 (1).jpg", "jordan", "Nữ", "38,39", 7000000);
sp[27] = new sanpham("JOR006", "JORDAN 4 TRUE BERRY", " 5.800.000", "Hồng", "img/jordan/images.jpg", "jordan", "Nam", "41,42", 5800000);
sp[28] = new sanpham("YEE003", "YEEZY 350 V2 BLACK", " 12.000.000", "Đen", "img/yeezy/footwear_191114_026.jpg", "yeezy", "Nam", "41,44", 12000000);
sp[29] = new sanpham("YEE004", "YEEZY 350 V2 ZEBRA", " 16.000.000", "Trắng", "img/yeezy/img01.jpg", "yeezy", "Nam", "40,41,42", 16000000);
sp[30] = new sanpham("YEE005", "YEEZY 350 V2 BELUGA", " 15.000.000", "Xám", "img/yeezy/Adidas-Yeezy-Boost-350-V2-Beluga-2pt0-Product.jpg", "yeezy", "Nam", "42,43,44", 15000000);






// -----------------------------------
// Luu san pham len local
function saveSP() {
    if (localStorage.getItem('sanpham') == null) {
        localStorage.setItem('sanpham', JSON.stringify(sp));
    }
}
 
// kiem tra URL
function layurl()
{
                
	var url = window.location.href;
    var params = url.split('?');
    var chuoicon=params[1];            
    var dem=0;
      
    	if(params.length>1)
           {
                chuoicon=chuoicon.split('&');  
				var xl=chuoicon.length;   
				if(chuoicon.length>1)
					{
                		var vitri=chuoicon[1];
						var loaisp=chuoicon[0];
						var m="";
                		var phanloai=loaisp.split('-');
						var lienket='<ul class="pagination modal-1">';		   
                		var sotrang;
						var chitiet="";
                		var temp = [];
                		var k=0;
							for(var i = 0 ; i < sp.length;i++){
                                if (phanloai[0] !== "timkiem") {
                                    if (phanloai.indexOf(sp[i].theloai) != -1 || phanloai.indexOf(boDau(sp[i].mota)) != -1 || phanloai.indexOf(boDau(sp[i].mota)) != -1) {
												temp[k++] = sp[i];
												console.log(sp[i].hinh);
										}
											
								}
							
                                else {
                                    if (phanloai.indexOf(sp[i].theloai) != -1 || phanloai.indexOf(boDau(sp[i].mota)) != -1 || phanloai.indexOf(boDau(sp[i].mau)) != -1 || boDau(sp[i].tensp.toLowerCase()).search(phanloai[1]) != -1) {
									temp[k++]=sp[i];
									}
							}}
							
									
                			for(var i = (vitri-1)*8 ; i < temp.length;i++)
                				{
                              	  dem++;
                                //mỗi div chứa 1 hình
                              	  m=m+'<a href="index.html?'+ temp[i].masp +'"><div  id="t"><img src="'+temp[i].hinh+'"  height="150px" width="240px"/><p style="color:black"><p>'+ temp[i].tensp +'</p><br><p>'+temp[i].gia+' VNĐ</p></p><a"><button id="'+temp[i].price+'" name="'+temp[i].tensp+'"  onclick="addCartItem(this)" style="width:100px;height:30px;border-radius:20px;" onclick="test(this)";>Add to cart</button></a></div></a>';
                               	  if(dem==8)
                               	  break;
                				}
				// show san pham
                document.getElementById("noidung").innerHTML=m;
					
                sotrang = Math.ceil(temp.length/8);
				// SO TRANG
                for(var i=1;i<=sotrang;i++)
                	{
                    	vitri=i;
                        lienket=lienket+'<li><a href="index.html?'+loaisp+'&'+vitri+'" id="trang'+i+'">'+i+'</a></li>';
                    }
				if(document.getElementById("noidung")!=""){
                      	document.getElementById("sotrang").innerHTML= lienket;
					}
				}
				//-------------------------------------------------------
    }
    var t = "";
    for (var i = 1; i <= sotrang; i++) {
        if (params[1] == 'nike&' + i || params[1] == 'timkiem-nike&' + i) {
            t = t + '<h1 style="border-bottom:#cbcbcb solid 1px;">- Sản Phẩm : NIKE</h1>';
            document.getElementById("menu123").innerHTML = t;
        }
    }
    for (var i = 1; i <= sotrang; i++) {
        if (params[1] == 'adidas&' + i || params[1]=='timkiem-adidas&'+i) {
            t = t + '<h1 style="border-bottom:#cbcbcb solid 1px;" >- Sản Phẩm : ADIDAS</h1>';
            document.getElementById("menu123").innerHTML = t;
        }
        if (params[1] == 'jordan&' + i || params[1] == 'timkiem-jordan&' + i) {
            t = t + '<h1 style="border-bottom:#cbcbcb solid 1px;" >- Sản Phẩm : JORDAN</h1>';
            document.getElementById("menu123").innerHTML = t;
        }
        if (params[1] == 'yeezy&' + i || params[1] == 'timkiem-yeezy&' + i) {
            t = t + '<h1 style="border-bottom:#cbcbcb solid 1px;">- Sản Phẩm : YEEZY</h1>';
            document.getElementById("menu123").innerHTML = t;
        }
    }
    if (params[1]== 'trangchu') {
        t = t + '<h1 style="border-bottom:#cbcbcb solid 1px;" >- Sản Phẩm : </h1>'
        document.getElementById("menu123").innerHTML = t;
    }
    if (params[1] == null || params[1] == '' ) {
        t = t + '<h1 style="border-bottom:#cbcbcb solid 1px;" >- Sản Phẩm : </h1>'
        document.getElementById("menu123").innerHTML = t;
    }


				
				// SHOW CHI TIET SAN PHAM
    var chitiet ='<div align="center" style=" margin-top:-80px;margin-bottom:30px;color:#f1e50b;"><h1><u> - - - - Thông tin chi tiết - - - - </u></h1></div>';
				for(var i = 0 ; i < sp.length;i++){
					if(params[1]==sp[i].masp){
                        chitiet = chitiet + '<img src="' + sp[i].hinh + '" height="400px" width="400px " style="border:black solid 1px;float:left;margin-left:100px;"/> <div style="float:left;font-size:18px;font-weight:bold;line-height:30px;text-align:left;margin-left: 50px;color:black;"><h2> ' + sp[i].tensp + '</h2><br>Màu : ' + sp[i].mau + '<br><br> ' + sp[i].mota + '<br><br>Size : ' + sp[i].size + '<br><br><span style="color:#f1e50b;"><br><h2>Giá : ' + sp[i].gia +' VNĐ</h2></span><a ><button id="'+sp[i].price+'" name="'+sp[i].tensp+'"  onclick="addCartItem(this)" style="margin-bottom:10px;width:100px;height:30px;border-radius:20px;" onclick="test(this)">Add to cart</button></a></div>';
						
						document.getElementById("noidung").innerHTML=chitiet;
					}
					
				}
				//----------------------------------------------------------
		// gio hang
		if(params[1]=='giohang'){
			if(sessionStorage.getItem('cartItems')==null){
				var giohang='<div style="background:white;"><button onclick="historyOrder()" style="height:50px;width:150px;">Lịch sử đặt hàng</button><p><h2> // Giỏ hàng trống </h2></p></div>';
				document.getElementById("noidung").innerHTML=giohang;
			}
			else{
				var tong=0;
				var cartItems=JSON.parse(sessionStorage.getItem('cartItems'));
				var giohang="";
				giohang+='<table style="margin-top:-80px;border: solid 1px;width:100%;font-weight:bold;font-size:20px;background:white;">';
				giohang+='<tr><td><button onclick="historyOrder()" style="height:25px;width:150px;margin-top:20px;border-radius:10px;">Lịch sử đặt hàng</button></td></tr>';
				giohang+='<tr><td colspan="6" style="color:red;text-align:center;font-size:30px;height:50px;">Giỏ hàng</td></tr>';
				giohang+='<tr style="font-size:25px;color:blue;height:30px;">';
				giohang+='<td>Hình</td><td>Tên sản phẩm</td><td>Giá</td><td>Số lượng</td><td>Thành tiền</td><td></td></tr>';
				for(var i=0;i<cartItems.length;i++){
					tong+=cartItems[i].thanhtien;
					giohang+='<tr style="height:70px;"><td><img src="'+cartItems[i].hinh+'" height="60px" width="90px" /></td><td>'+cartItems[i].tensp+'</td><td>'+cartItems[i].gia+'</td><td><input type="number" id="'+i+'" name="sl" value="'+cartItems[i].soluong+'" min="1" onChange="capnhatSoLuong(this)" style="width:40px;border-color:black;border-style:solid;height:20px;"></td><td id="thanhtien'+i+'">'+cartItems[i].thanhtien+' VNĐ</td><td><i id="'+i+'" onclick="removeItem(this)" class="fa fa-window-close"></i></td></tr>';	
				}
				giohang+='<tr style="color:red;height:70px;"><td>Tổng :</td><td id="tong" colspan="5" style="text-align:center;">'+tong+'</td></tr>'
				giohang+='<tr><td></td><td colspan="5" style="text-align:center;"><button style="border-radius:20px;width:100px;height:50px;" onclick="addOrder()">Đặt hàng</button></td></tr>'
				giohang+='</table>';
				document.getElementById("noidung").innerHTML=giohang;
			}
		}
    if (params[1] == 'trangchu' || params[1] == null || params[1] =='' ){
			var trangchu="";
			var dem=0;
			for(var i=0;i<danhmuc.length;i++){
                trangchu +='<div><div style="border-bottom:#cbcbcb solid 1px;font-weight:bold; font-size:20px;color:black;margin-top:10px;">'+danhmuc[i].name+' : <a href="index.html?'+danhmuc[i].key+'&1"><div style="float:right;color:black;"><h5>xem thêm >></h5></div></a></div>'
				for(var j=0;j<sp.length;j++){
					if(sp[j].theloai==danhmuc[i].key){
                        trangchu += '<a href="index.html?' + sp[j].masp +'"><div id="i"><img src="'+sp[j].hinh+'"  height="150px" width="248px"/><p>'+ sp[j].tensp +'</p><br><p>'+sp[i].gia+' VNĐ</p><a ><button id="'+sp[j].price+'" name="'+sp[j].tensp+'"  onclick="addCartItem(this)" style="margin-bottom:10px;width:100px;height:30px;border-radius:20px;" onclick="test(this)">Add to cart</button></a></div></a>';
						dem++;
						if(dem==4){
							dem=0;
							trangchu+='</div';
							break;
						}   
					}   
				}
			}
			document.getElementById("noidung").innerHTML=trangchu;
		}
};

//   DANH DAU CHON TRANG
function danhDau(){
	var url = window.location.href;
	var vt = url.split("&");
	var x=vt[1];
	document.getElementById("trang"+x).style.background='blue';
	document.getElementById("trang"+x).style.cursor='default';
};

//----------------------------------------------------------------------------

// TIM KIEM
function timKiem(){
	 timkiem=document.getElementById("giatritimkiem").value;
			if(timkiem!==""){
					
					window.location.href='index.html?timkiem-'+boDau(timkiem)+'&1';			
			}
		//---
};

// Gio hang
function gioHang(){
	window.location.href='index.html?giohang';
}

//----------------------
 
 function boDau(a){
	 var kq=a;
	 	kq= kq.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
     kq = kq.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|E/g, "e");
     kq = kq.replace(/N/g, "n");
     kq = kq.replace(/T/g, "t");
     kq = kq.replace(/Đ/g, "d"); kq = kq.replace(/D/g, "d"); kq = kq.replace(/X/g, "x"); kq = kq.replace(/H/g, "h"); kq = kq.replace(/G/g, "g");
     kq = kq.replace(/Z/g, "z"); kq = kq.replace(/V/g, "v"); kq = kq.replace(/M/g, "m"); kq = kq.replace(/B/g, "b"); 
     kq = kq.replace(/A/g, "a");
     kq = kq.replace(/Y/g, "y");
     kq = kq.replace(/J/g, "j");
		kq= kq.replace(/ì|í|ị|ỉ|ĩ/g,"i");
     kq = kq.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|O/g,"o");
		kq= kq.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
		kq= kq.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
		kq= kq.replace(/đ/g,"d");
		//kq= kq.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g,"-");
		kq= kq.replace(/  /g," "); //thay thế 2' ' thành 1' '
		kq= kq.replace(/^\ +|\ +$/g,"");//cắt bỏ ký tự - ở đầu và cuối chuỗi
		//kq= kq.replace(/ /g,"-");
		kq=kq.replace(/ /g,"%20");
		return kq;
 }

//----------------------------------------------------------------------------

// THUC HIEN KHI LOAD TRANG WEB
window.addEventListener("load", function()
{    
	saveSP();
    checkStatusLogin();
	checkAdmin();
    layurl();
	danhDau();
}
);
//---------------------------------------

// Nhan enter trong khung search
	function thaotacEnter(){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode=='13'){
			timKiem();
		} 
	}

// dang nhap dang ky dang xuat
	var exist=false;
	var account={
		hoten:'ADMIN',
		username:'admin',
		password:'admin',
		type:'Admin'
	};
	if(localStorage.getItem('accounts')==null){
		var accounts=[];
		accounts.push(account);
		localStorage.setItem('accounts',JSON.stringify(accounts));
	}
	else{
		var accounts=JSON.parse(localStorage.getItem('accounts'));
		for(var i=0;i<accounts.length;i++){
			if(accounts[i].type=='Admin'){
				exist=true;
			}
		}
		if(exist==false){
			accounts.push(account);
			localStorage.setItem('accounts',JSON.stringify(accounts));
		}
	}

function saveAccount(){
	document.getElementById('error').style.display='none';
	document.getElementById('accounterror').style.display='none';
	document.getElementById('repasserror').style.display='none';
	var user=document.forms["dangky"]["user"].value;
	var pass=document.forms["dangky"]["pass"].value;
	var repass=document.forms["dangky"]["repass"].value;
	var hoten=document.forms["dangky"]["fullname"].value;
	var sdt=document.forms["dangky"]["phone"].value
	if(user===""|| pass==="" || repass===""){
		document.getElementById('error').style.display='block';
		document.getElementById('error').innerHTML='Vui lòng nhập đầy đủ thông tin';
		//alert("Vui lòng nhập đầy đủ thông tin");
		return false;
	}
	if(user.length <6 || pass.length<6){
		document.getElementById('accounterror').style.display='block';
		document.getElementById('accounterror').innerHTML='Tài khoản và mật khẩu phải ít nhất 6 ký tự !!!';
		//alert("Tài khoản và mật khẩu phải ít nhất 6 ký tự !!!");
		return false;
	}
	if(pass !== repass){
		document.getElementById('repasserror').style.display='block';
		document.getElementById('repasserror').innerHTML='Xác nhận mật khẩu không trùng khớp !!!';
		//alert("Xác nhận mật khẩu không trùng khớp !!!");
		return false;
	}
	if(user.indexOf(" ")!==-1 || pass.indexOf(" ")!== -1){
		document.getElementById('error').style.display='block';
		document.getElementById('error').innerHTML='Tài khoản hoặc mật khẩu không được có khoảng trắng!!!';
		//alert("Tài khoản hoặc mật khẩu không được có khoảng trắng!!!");
		return false;
	}
	if(sdt.length>9 && sdt[0]!=0){
		document.getElementById('error').style.display='block';
		document.getElementById('error').innerHTML='Số điện thoại không hợp lệ';
		//alert('Số điện thoại không hợp lệ');
		return false;
	}
	// kiem tra 
	
			var account = {
				hoten:hoten,
				sdt:sdt,
				username: user,
				password: pass,
				type    : 'User'
			};
			if(localStorage.getItem('accounts')=== null){
				var accounts=[];
				accounts.push(account);
				localStorage.setItem('accounts',JSON.stringify(accounts));
				alert("Đăng ký thành công ! Hãy đăng nhập để trải nghiệm");
				document.getElementById("login").style.display="block";
			}
			else{
				var checkAccount=true;
				var accounts = JSON.parse(localStorage.getItem('accounts'));
				for(var i=0;i<accounts.length;i++){
					if(accounts[i].username=== account.user){
						checkAccount=false;
					}
				}
				if(checkAccount===false){
					alert("Tên tài khoản đã tồn tại ");
					return false;
				}
				else{
					accounts.push(account);
					localStorage.setItem('accounts',JSON.stringify(accounts));
					alert("Đăng ký thành công ! Hãy đăng nhập để trải nghiệm");
					openSignIn();
				}		
			}
	
}
function checkLogin(){
	var user=document.forms["dangnhap"]["username"].value;
	var pass=document.forms["dangnhap"]["password"].value;
	var accounts = JSON.parse(localStorage.getItem('accounts'));
	var statusSingIn=false;
	for(var i=0;i<accounts.length;i++){
		if(user===accounts[i].username && pass===accounts[i].password){
			statusSingIn=true;
			alert("Chào "+accounts[i].username+"!!!");
			var online={
				hoten:accounts[i].hoten,
				sdt:accounts[i].sdt,
				user:user,
				type:accounts[i].type
			};
			flag=true;
			localStorage.setItem('online',JSON.stringify(online));
			window.location.reload();
		}
	}
	if(statusSingIn===false){
		alert("Tài khoản hoặc mật khẩu không hợp lệ");
	}
}

function openSignUp(){
	document.getElementById("dk").style.display="block";
	document.getElementById("login").style.display="none";
	
}
function closeSignUp(){
	document.getElementById("dk").style.display="none";
}
function openSignIn(){
	document.getElementById("login").style.display="block";
	document.getElementById("dk").style.display="none";
}
function closeSignIn(){
	document.getElementById("login").style.display="none";
}



function checkStatusLogin(){
	if(localStorage.getItem('online')!=null){
		var online=JSON.parse(localStorage.getItem('online'));
		document.getElementById('useronline').innerHTML=online.hoten;
		document.getElementById('type').innerHTML=online.type+" : ";
		document.getElementById('inout').style.display='none';
	}
	else{
		document.getElementById('info').style.display='none';
	}
};
function signOut(){
	localStorage.removeItem('online');
	document.getElementById('info').style.display='none';
	document.getElementById('inout').style.display='block';
	
}
//-----------------------------------------------
// khi dang nhap ADmin
function checkAdmin(){
	if(localStorage.getItem('online')!=null){
		var online=JSON.parse(localStorage.getItem('online'));
        if (online.type == 'Admin'){
			document.getElementById('edit').style.display="block";
		}
	}   
}



//gio hang
	// mang gio hang
function addCartItem(obj){
	var gia=obj.id;
	var tensp=obj.name;
	var soluong=1;
	var tien;
	var cartItem;
	// lay thong tin sp
	for(var i=0;i<sp.length;i++){
		if(tensp==sp[i].tensp){
			tien=sp[i].price*soluong;
			cartItem={
				hinh:sp[i].hinh,
				tensp:sp[i].tensp,
				gia:sp[i].price,
				soluong:soluong,
				thanhtien:tien
			};
		}
	}
	if(sessionStorage.getItem('cartItems')===null){
		alert('DA THEM VAO GIO HANG');
		var cartItems=[];
		cartItems.push(cartItem);
		sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
	}
	else{
		var flag=true;
		var cartItems=JSON.parse(sessionStorage.getItem('cartItems'));
		for(var i=0;i < cartItems.length;i++){	
			if(cartItem.tensp==cartItems[i].tensp){
				alert('Da them vao gio hang');
				cartItems[i].soluong+=1;
				cartItems[i].thanhtien=cartItems[i].gia*cartItems[i].soluong;
				flag=false;
				sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
			}
		}
		if(flag==true){
			cartItems.push(cartItem);
			alert('Da them vao gio hang');
			sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
		}
	}
}
function capnhatSoLuong(obj){
	var sl=obj.value;
	var vt=obj.id;
	var cartItems=JSON.parse(sessionStorage.getItem('cartItems'));
	cartItems[vt].soluong=sl;
	cartItems[vt].thanhtien=cartItems[vt].gia*cartItems[vt].soluong;
	sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
	document.getElementById('thanhtien'+vt).innerHTML=cartItems[vt].thanhtien;
	var tong=JSON.parse(document.getElementById('tong').innerHTML) + cartItems[vt].gia;
	document.getElementById('tong').innerHTML=tong;
	window.location.reload();	
}
function removeItem(obj){
	var vt=obj.id;
	var cartItems=JSON.parse(sessionStorage.getItem('cartItems'));
	alert(cartItems[0].tensp+' đã bị xóa khỏi giỏ hàng');
	cartItems.splice(vt,1);
	sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
	window.location.href='index.html?giohang';
}
function addOrder(){
	if(localStorage.getItem('online')==null)
		alert('Hãy ĐĂNG NHẬP để thực hiện ĐẶT HÀNG !! Xin cảm ơn ');
	else{
		var cartItems=JSON.parse(sessionStorage.getItem('cartItems'));
		var account=JSON.parse(localStorage.getItem('online'));
		var tong=JSON.parse(document.getElementById('tong').innerHTML);
		var chitiet="";
		for(var i=0;i<cartItems.length;i++){
			chitiet+=cartItems[i].tensp+" ( "+cartItems[i].soluong+" Đôi) ,";
		}
		if(localStorage.getItem('orders')!=null){
				var orders=JSON.parse(localStorage.getItem('orders'));
				var order={
					id:'hd'+Math.abs(orders.length+1),
					hoten:account.hoten,
					sdt:account.sdt,
					chitiet:chitiet,
					tong:tong,
					status:'Chờ xác nhận'
				};
				orders.push(order);
				localStorage.setItem('orders',JSON.stringify(orders));
				sessionStorage.removeItem('cartItems');
		}
		else{
			var orders=[];
			var order={
				id:'hd1',
				hoten:account.hoten,
				sdt:account.sdt,
				chitiet:chitiet,
				tong:tong,
				status:'Chờ xác nhận'
			};
			orders.push(order);
			localStorage.setItem('orders',JSON.stringify(orders));
			sessionStorage.removeItem('cartItems');
		}
		document.getElementById("noidung").innerHTML='<p style="font-weight:bold text-align:center;background:white;">Đặt hàng thành công. Chúng tôi sẽ liên lạc với quý khách trong 24h để xác nhận đơn hàng. <br>Cám ơn đã tin tưởng sử dụng dịch vụ của TDT KINGSHOES. <br>Chúc quý khách có 1 ngày vui vẻ !!! <br>		Mọi thắc mắc xin liên hệ Hotline : 0356679581  </p>'
	}
}

function historyOrder(){
	var history="";
	var flag=false;
	if(localStorage.getItem('online')!=null && localStorage.getItem('orders')!=null ){
			var online=JSON.parse(localStorage.getItem('online'));
			var orders=JSON.parse(localStorage.getItem('orders'));
			for(var i=0;i<orders.length;i++){
				if(online.hoten==orders[i].hoten){
					flag=true;
					history+='<table style="background:white;width:100%;height:30px;font-weight:bold;"><tr><td colspan="5" style="text-align:center;color:red;"><h2>Đơn hàng đã đặt</h2></td></tr>';
					history+='<tr style="color:blue;font-size:20px;"><td>Khách hàng</td><td>Số điện thoại</td><td>Chi tiết đơn hàng</td><td>Tổng tiền</td><td>Tình trạng</td></tr>';
					history+='<tr style="height:70px;"><td>'+orders[i].hoten+'</td><td>'+orders[i].sdt+'</td><td>'+orders[i].chitiet+'</td><td>'+orders[i].tong+'</td><td>'+orders[i].status+'</td></tr>';
				}
			}
			history+='</table>';
			document.getElementById('noidung').innerHTML=history;
	}
	if(flag==false){
		document.getElementById('noidung').innerHTML='<p>Chưa có đơn hàng được đặt</p>';
	}
}




