function addcan(id){addlist("Giáp",1,id);addlist("Ất",2,id);addlist("Bính",3,id);addlist("Đinh",4,id);addlist("Mậu",5,id);addlist("Kỷ",6,id);addlist("Canh",7,id);addlist("Tân",8,id);addlist("Nhâm",9,id);addlist("Quý",10,id);}
function addchi(id){addlist("Tý",1,id);addlist("Sửu",2,id);addlist("Dần",3,id);addlist("Mão",4,id);addlist("Thìn",5,id);addlist("Tỵ",6,id);addlist("Ngọ",7,id);addlist("Mùi",8,id);addlist("Thân",9,id);addlist("Dậu",10,id);addlist("Tuất",11,id);addlist("Hợi",12,id);}
function addcung(id){addlist("Tý",11,id);addlist("Sửu",12,id);addlist("Dần",1,id);addlist("Mão",2,id);addlist("Thìn",3,id);addlist("Tỵ",4,id);addlist("Ngọ",5,id);addlist("Mùi",6,id);addlist("Thân",7,id);addlist("Dậu",8,id);addlist("Tuất",9,id);addlist("Hợi",10,id);}
function addlist(txt,val,id){var x=document.getElementById(id);var option=document.createElement("option");option.text=txt;option.value=val;try{x.add(option);}catch(e){x.add(option,null);};}
for(var i=1800;i<2080;++i)
addlist(i,i,"ID_NAMDL");for(var i=1800;i<2080;++i)
addlist(i,i,"ID_NAMXEM");for(var i=1;i<13;++i)
addlist(i,i,"ID_THANGDL");for(var i=1;i<13;++i)
addlist(i,i,"ID_THANGXEM");for(var i=1;i<32;++i)
addlist(i,i,"ID_NGAYDL");for(var i=1;i<32;++i)
addlist(i,i,"ID_NGAYXEM");addchi("ID_GIO");for(var i=1;i<61;++i)
addlist(i,i,"ID_PHUTDL");for(var i=1800;i<2080;++i)
addlist(i,i,"ID_NAM");for(var i=1;i<32;++i)
addlist(i,i,"ID_NGAY");for(var i=1;i<13;++i)
addlist(i,i,"ID_THANG");for(var i=1;i<61;++i)
addlist(i,i,"ID_PHUT");