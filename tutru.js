var xtron=600,ytron=270,rtron=220;var diemcan=new Array();for(var i=1;i<11;i++)
diemcan[i]=36;var w=220,hh=100;function vekhung()
{var canvas=document.getElementById('myCanvas');var context=canvas.getContext('2d');var imageObj=new Image();canvas.width=1160;canvas.height=1600;context.save();context.scale(800*0.001,800*0.001);context.fillStyle='#FFFFFA';context.globalAlpha=1;context.fillStyle='#FFFFFA';context.fill();context.closePath();roundRect(context,1,1,1180,1600,30,0,1);context.lineWidth=1;context.strokeStyle='black';context.shadowColor='#999';context.shadowBlur=10;context.shadowOffsetX=5;context.shadowOffsetY=5;context.stroke();context.closePath();roundRect(context,1,1,1180,1600,30,0,1);context.fillStyle='#FFFFFA';context.fill();context.lineWidth=1;context.strokeStyle='black';context.shadowColor='#999';context.shadowBlur=0;context.shadowOffsetX=0;context.shadowOffsetY=0;context.stroke();context.closePath();context.beginPath();context.rect(40,40,240,160);context.fillStyle='#FFFFFA';context.fill();context.lineWidth=1;context.strokeStyle='black';context.shadowColor='#999';context.shadowBlur=10;context.shadowOffsetX=5;context.shadowOffsetY=5;context.stroke();context.closePath();context.rect(30,540,w*5,130+hh*9);context.fillStyle='#FFFFFA';context.fill();context.lineWidth=1;context.strokeStyle='black';context.stroke();context.closePath();context.beginPath();context.moveTo(40,70);context.lineTo(280,70);context.shadowColor='0';context.shadowBlur=0;context.shadowOffsetX=0;context.shadowOffsetY=0;context.rect(30,540,w*5,130+hh*9);context.fillStyle='#FFFFFA';context.fill();context.lineWidth=1;context.strokeStyle='black';context.stroke();context.closePath();context.beginPath();context.rect(40,40,240,160);context.fillStyle='#FFFFFA';context.fill();context.lineWidth=1;context.strokeStyle='black';context.closePath();context.rect(30,540,w*5,30);context.fillStyle='#7D542A';context.fill();context.stroke();context.rect(30,970,w*4,30);context.fillStyle='#7D542A';context.fill();context.stroke();context.rect(30,970+2*hh,w*4,30);context.fillStyle='#7D542A';context.fill();context.stroke();context.rect(30,1170+2*hh,w*5,30);context.fillStyle='#7D542A';context.fill();context.stroke();context.strokeStyle='black';context.shadowColor='#999';context.shadowBlur=10;context.shadowOffsetX=5;context.shadowOffsetY=5;context.stroke();context.closePath();context.rect(30+w*5,540,30,hh*10+30);context.fillStyle='#7D542A';context.fill();context.stroke();context.fillStyle='#FFFFFA';context.strokeStyle='black';context.shadowColor='#999';context.shadowBlur=0;context.shadowOffsetX=0;context.shadowOffsetY=0;context.stroke();context.closePath();context.rect(30+w*5,540,30,hh*10+30);context.fillStyle='#7D542A';context.fill();context.stroke();context.fillStyle='#FFFFFA';context.globalAlpha=0.5;context.beginPath();context.moveTo(30,570);context.lineTo(30+5*w+30,570);context.stroke();context.closePath();context.beginPath();context.moveTo(30,570+hh);context.lineTo(30+5*w+30,570+hh);context.stroke();context.closePath();context.beginPath();context.moveTo(30,570+3*hh);context.lineTo(30+5*w+30,570+3*hh);context.stroke();context.closePath();context.beginPath();context.moveTo(30,680+8*hh);context.lineTo(30+5*w,680+8*hh);context.stroke();context.closePath();context.beginPath();context.moveTo(30,680+hh);context.lineTo(30+5*w,680+hh);context.stroke();context.closePath();context.beginPath();context.moveTo(30,680+8*hh);context.lineTo(30+5*w,680+8*hh);context.stroke();context.closePath();context.beginPath();context.moveTo(30,680+4*hh);context.lineTo(30+5*w,680+4*hh);context.stroke();context.closePath();context.beginPath();context.moveTo(30,770+5*hh);context.lineTo(30+5*w+30,770+5*hh);context.stroke();context.closePath();context.beginPath();context.moveTo(30,770+2*hh);context.lineTo(30+5*w+30,770+2*hh);context.stroke();context.closePath();context.beginPath();context.moveTo(30+w,540);context.lineTo(30+w,570+10*hh);context.stroke();context.closePath();context.beginPath();context.moveTo(30+w*2,540);context.lineTo(30+w*2,570+10*hh);context.stroke();context.closePath();context.beginPath();context.moveTo(30+w*3,540);context.lineTo(30+w*3,570+10*hh);context.stroke();context.closePath();context.beginPath();context.moveTo(30+w*4,540);context.lineTo(30+w*4,570+10*hh);context.stroke();context.closePath();}
var thansat=new Array(5);function ansaotutru(sao,j,i,k)
{var canvas=document.getElementById('myCanvas');var context=canvas.getContext('2d');var w=220;var hh=100;context.fillText(sao,10-w/2+i*w+(k-2)*80,500+j*hh+ftutru[i][j]*lineskip);ftutru[i][j]++;}
function tutru(acan,achi){var starttutru=new Date();for(var i=0;i<=5;i++)
thansat[i]=0;var muoithan=new Array(10);muoithan[0]="Tỷ";muoithan[1]="Kiếp";muoithan[2]="Thực";muoithan[3]="Thương";muoithan[4]="T. Tài";muoithan[5]="Tài";muoithan[6]="T. Quan";muoithan[7]="Quan";muoithan[8]="Thiên Ấn";muoithan[9]="Ấn";vekhung();var canvas=document.getElementById('myCanvas');var context=canvas.getContext('2d');context.globalAlpha=1;var lineskip=20;var w=220,hh=100;{context.fillStyle='white';context.font='bold 12pt Arial';context.fillText("Thông tin đương số",60,60);context.fillText("Tên",60,60+lineskip*2);context.fillText(tennguoi,160,60+lineskip*2);context.fillText(ngaydl+"-"+thangdl+"-"+namdl,160,60+lineskip*3);if(gioitinh==1)
context.fillText("Nam",160,60+lineskip*5);else
context.fillText("Nữ",160,60+lineskip*5);context.fillText("Ngày sinh",60,60+lineskip*3);context.fillText("Giờ sinh",60,60+lineskip*4);context.fillText("Giới tính",60,60+lineskip*5);context.fillText(giodl+" giờ "+phutdl+" phút",160,60+lineskip*4);context.textAlign='center';context.fillText("Năm",30+w/2,560);context.fillText("Tháng",30+3*w/2,560);context.fillText("Ngày",30+5*w/2,560);context.fillText("Giờ",30+7*w/2,560);context.fillText("Thai",30+9*w/2,560);context.save();context.save();context.translate(1140,580);context.rotate(Math.PI/2);context.textAlign="left";context.fillText("Thiên Can",0,0);context.fillText("Địa Chi",hh+10,0);context.fillText("Can Tàng",2*hh+110,0);context.restore();var canvas=document.getElementById('myCanvas');var context=canvas.getContext('2d');context.font='bold 14pt Arial';g(acan[1]);context.textAlign='center';context.fillText(can[acan[1]],30+w/2,600);g(acan[2]);context.fillText(can[acan[2]],30+3*w/2,600);g(acan[3]);context.fillText(can[acan[3]],30+5*w/2,600);g(acan[4]);context.fillText(can[acan[4]],30+7*w/2,600);g(canthai);context.fillText(can[canthai],30+9*w/2,600);context.font='bold 14pt Arial';var canvas=document.getElementById('myCanvas');h(achi[1]);context.textAlign='center';context.fillText(chi[achi[1]],30+w/2,600+hh);h(achi[2]);context.fillText(chi[achi[2]],30+3*w/2,600+hh);h(achi[3]);context.fillText(chi[achi[3]],30+5*w/2,600+hh);h(achi[4]);context.fillText(chi[achi[4]],30+7*w/2,600+hh);h(chithai);context.fillText(chi[chithai],30+9*w/2,600+hh);context.font=' 11pt Arial';f(acan[1],achi[1]);context.fillText(nh[acan[1]][achi[1]],30+w/2,600+hh+25);f(acan[2],achi[2]);context.fillText(nh[acan[2]][achi[2]],30+3*w/2,600+hh+25);f(acan[3],achi[3]);context.fillText(nh[acan[3]][achi[3]],30+5*w/2,600+hh+25);f(acan[4],achi[4]);context.fillText(nh[acan[4]][achi[4]],30+7*w/2,600+hh+25);f(canthai,chithai);context.fillText(nh[canthai][chithai],30+9*w/2,600+hh+25);}
{var canvas=document.getElementById('myCanvas');var context=canvas.getContext('2d');context.textAlign='center';context.font='12pt Arial';context.font='bold 12pt Arial';incantang(cantang[achi[1]][0],30+w/2,600+3*hh,cantang[achi[1]][1],muoithan[thapthan(acan[3],cantang[achi[1]][1])],cantang[achi[1]][2],muoithan[thapthan(acan[3],cantang[achi[1]][2])],cantang[achi[1]][3],muoithan[thapthan(acan[3],cantang[achi[1]][3])]);incantang(cantang[achi[3]][0],30+5*w/2,600+3*hh,cantang[achi[3]][1],muoithan[thapthan(acan[3],cantang[achi[3]][1])],cantang[achi[3]][2],muoithan[thapthan(acan[3],cantang[achi[3]][2])],cantang[achi[3]][3],muoithan[thapthan(acan[3],cantang[achi[3]][3])]);incantang(cantang[achi[4]][0],30+7*w/2,600+3*hh,cantang[achi[4]][1],muoithan[thapthan(acan[3],cantang[achi[4]][1])],cantang[achi[4]][2],muoithan[thapthan(acan[3],cantang[achi[4]][2])],cantang[achi[4]][3],muoithan[thapthan(achi[4],cantang[achi[4]][3])]);incantang(cantang[chithai][0],30+9*w/2,600+3*hh,cantang[chithai][1],muoithan[thapthan(acan[3],cantang[chithai][1])],cantang[chithai][2],muoithan[thapthan(acan[3],cantang[chithai][2])],cantang[chithai][3],muoithan[thapthan(chithai,cantang[chithai][3])]);incantang(cantang[achi[2]][0],30+3*w/2,600+3*hh,cantang[achi[2]][1],muoithan[thapthan(acan[3],cantang[achi[2]][1])],cantang[achi[2]][2],muoithan[thapthan(acan[3],cantang[achi[2]][2])],cantang[achi[2]][3],muoithan[thapthan(acan[3],cantang[achi[2]][3])]);context.font=' 12pt Arial';context.fillText(muoithan[thapthan(acan[3],acan[1])],30+w/2,600+lineskip);context.fillText(ts[vongtruongsinhtutru(acan[1],achi[2])],30+w/2,600+2*lineskip);context.fillText(ts[vongtruongsinhtutru(acan[2],achi[2])],30+3*w/2,600+2*lineskip);context.fillText(ts[vongtruongsinhtutru(acan[3],achi[2])],30+5*w/2,600+2*lineskip);context.fillText(ts[vongtruongsinhtutru(acan[4],achi[2])],30+7*w/2,600+2*lineskip);context.font=' 11pt Arial';context.fillText(muoithan[thapthan(acan[3],acan[2])],30+3*w/2,600+lineskip);context.fillText(muoithan[thapthan(acan[3],acan[3])],30+5*w/2,600+lineskip);context.fillText(muoithan[thapthan(acan[3],acan[4])],30+7*w/2,600+lineskip);var tuoitutrudaivan;if(gioitinh==1){tuoitutrudaivan=dvtutrunam;}else{tuoitutrudaivan=dvtutrunu;}
var tuoinhapvan=INT((tuoitutrudaivan+1)/3);var candaivantt=new Array();var chidaivantt=new Array();if(gioitinh==1)
for(var i=0;i<8;i++){candaivantt[i]=checkcan(acan[2]+i);chidaivantt[i]=check(achi[2]+i);}
if(gioitinh!=1)
for(var i=0;i<9;i++){candaivantt[i]=checkcan(acan[2]-i+10);chidaivantt[i]=check(achi[2]-i+12);}
var khoidaivan=0;var ketdaivan=tuoinhapvan;for(var i=0;i<4;i++){context.font='bold 12pt Arial';g(candaivantt[i]);context.fillText(can[candaivantt[i]],30+(2*i+1)*w/2,622+4*hh);h(chidaivantt[i]);context.textAlign='center';context.fillText(chi[chidaivantt[i]],30+(2*i+1)*w/2,622+4*hh+lineskip);g(candaivantt[i]);context.font='12pt Arial';context.fillText(muoithan[thapthan(acan[3],candaivantt[i])],-30+(2*i+1)*w/2,622+4*hh);context.fillText(ts[vongtruongsinhtutru(candaivantt[i],achi[2])],90+(2*i+1)*w/2,622+4*hh);context.fillText(ts[vongtruongsinhtutru(candaivantt[i],chidaivantt[i])],90+(2*i+1)*w/2,622+4*hh+lineskip);context.fillText(nh[candaivantt[i]][chidaivantt[i]],30+(2*i+1)*w/2,622+4*hh+2*lineskip);var dvtt=chidaivantt[i];incantang(cantang[dvtt][0],30+(2*i+1)*w/2,660+2*lineskip+4*hh,cantang[dvtt][1],muoithan[thapthan(acan[3],cantang[dvtt][1])],cantang[dvtt][2],muoithan[thapthan(acan[3],cantang[dvtt][2])],cantang[dvtt][3],muoithan[thapthan(acan[3],cantang[dvtt][3])]);context.fillStyle='#FFFFFF';context.fillText("Đại Vận "+khoidaivan+"-"+ketdaivan,30+(2*i+1)*w/2,590+4*hh);ketdaivan=ketdaivan+10;khoidaivan=ketdaivan-9;}
for(var i=4;i<8;i++){context.font='bold 12pt Arial';g(candaivantt[i]);context.fillText(can[candaivantt[i]],30+(2*i-7)*w/2,622+6*hh);h(chidaivantt[i]);context.textAlign='center';context.fillText(chi[chidaivantt[i]],30+(2*i-7)*w/2,622+6*hh+lineskip);context.font='12pt Arial';g(candaivantt[i]);context.fillText(muoithan[thapthan(acan[3],candaivantt[i])],-30+(2*i-7)*w/2,622+6*hh);context.fillText(ts[vongtruongsinhtutru(candaivantt[i],achi[2])],90+(2*i-7)*w/2,622+6*hh);context.fillText(ts[vongtruongsinhtutru(candaivantt[i],chidaivantt[i])],90+(2*i-7)*w/2,622+6*hh+lineskip);context.fillText(nh[candaivantt[i]][chidaivantt[i]],30+(2*i-7)*w/2,622+6*hh+2*lineskip);var dvtt=chidaivantt[i];incantang(cantang[dvtt][0],30+(2*i-7)*w/2,660+2*lineskip+6*hh,cantang[dvtt][1],muoithan[thapthan(acan[3],cantang[dvtt][1])],cantang[dvtt][2],muoithan[thapthan(acan[3],cantang[dvtt][2])],cantang[dvtt][3],muoithan[thapthan(acan[3],cantang[dvtt][3])]);context.fillStyle='#FFFFFF';context.fillText("Đại Vận "+khoidaivan+"-"+ketdaivan,30+(2*i-7)*w/2,590+6*hh);ketdaivan=ketdaivan+10;khoidaivan=ketdaivan-9;}
context.fillStyle='#FFFFFF';context.fillText("Năm xem: "+namxem,30+w/2,590+8*hh);context.fillText("Tháng âm xem: "+thangxem,30+3*w/2,590+8*hh);context.fillText("Ngày âm xem: "+ngayxem,30+5*w/2,590+8*hh);context.fillText("Giờ âm xem: "+gioxemdl,30+7*w/2,590+8*hh);context.fillText("Tiểu Vận "+namxem,30+9*w/2,590+8*hh);var menhtutru=check(7-achi[2]+1-achi[4]);var canmenhtutru=checkcan(2*acan[1]+menhtutru-2);context.strokeStyle='red';context.fillStyle='red';f(canmenhtutru,menhtutru);context.fillText("Mệnh "+can[canmenhtutru]+" "+chi[menhtutru],50+8*w/2,600+2*hh);var tieuvantt=check(menhtutru-achi[1]+chinamxem);cantieuvantutru=checkcan(2*cannamxem+tieuvantt-2);candaivantt[8]=cannamxem;chidaivantt[8]=chinamxem;candaivantt[9]=canthangxem;chidaivantt[9]=chithangxem;candaivantt[10]=canngayxem;chidaivantt[10]=chingayxem;candaivantt[11]=cangioxem;chidaivantt[11]=chigioxem;candaivantt[12]=cantieuvantutru;chidaivantt[12]=tieuvantt;for(var i=8;i<13;i++){context.font='bold 12pt Arial';g(candaivantt[i]);context.fillText(can[candaivantt[i]],30+(2*i-15)*w/2,622+8*hh);h(chidaivantt[i]);context.textAlign='center';context.fillText(chi[chidaivantt[i]],30+(2*i-15)*w/2,622+8*hh+lineskip);context.font='12pt Arial';g(candaivantt[i]);context.fillText(muoithan[thapthan(acan[3],candaivantt[i])],-30+(2*i-15)*w/2,622+8*hh);context.fillText(ts[vongtruongsinhtutru(candaivantt[i],achi[2])],90+(2*i-15)*w/2,622+8*hh);context.fillText(ts[vongtruongsinhtutru(candaivantt[i],chidaivantt[i])],90+(2*i-15)*w/2,622+8*hh+lineskip);context.fillText(nh[candaivantt[i]][chidaivantt[i]],30+(2*i-15)*w/2,622+8*hh+2*lineskip);var dvtt=chidaivantt[i];incantang(cantang[dvtt][0],30+(2*i-15)*w/2,660+2*lineskip+8*hh,cantang[dvtt][1],muoithan[thapthan(acan[3],cantang[dvtt][1])],cantang[dvtt][2],muoithan[thapthan(acan[3],cantang[dvtt][2])],cantang[dvtt][3],muoithan[thapthan(acan[3],cantang[dvtt][3])]);context.fillStyle='#FFFFFF';}
context.font=' 11pt Arial';f(acan[1],achi[1]);context.fillText(nh[acan[1]][achi[1]],30+w/2,600+hh+25);f(acan[2],achi[2]);context.fillText(nh[acan[2]][achi[2]],30+3*w/2,600+hh+25);f(acan[3],achi[3]);context.fillText(nh[acan[3]][achi[3]],30+5*w/2,600+hh+25);}
var cantanghoahop=cantang.slice(0);var temp;{context.font=' 7pt Arial';for(var i=1;i<5;i++)
for(var j=i+1;j<5;j++)
for(var k=j+1;k<5;k++){temp=checktamhoi(achi[i],achi[j],achi[k]);if(temp[0]!=0){var test=0;for(var l=1;l<5;l++)
if(INT((acan[l]+1)/2)==INT((cantang[temp[1]][1]+1)/2))
test=l;cantanghoahop[achi[i]][0]=1;cantanghoahop[achi[j]][0]=1;cantanghoahop[achi[k]][0]=1;cantanghoahop[achi[i]][2]=0;cantanghoahop[achi[j]][2]=0;cantanghoahop[achi[k]][2]=0;cantanghoahop[achi[i]][3]=0;cantanghoahop[achi[j]][3]=0;cantanghoahop[achi[k]][3]=0;context.textAlign='left';if(test!=0){context.fillText(tru[i-1]+" "+tru[j-1]+" "+tru[k-1]+" hội hóa "+can[cantang[temp[1]][1]],35+(8)*w/2,590+4*hh+inrabinhchu*lineskip);inrabinhchu++;cantanghoahop[achi[i]][1]=cantang[temp[1]][1];cantanghoahop[achi[j]][1]=cantang[temp[1]][1];cantanghoahop[achi[k]][1]=cantang[temp[1]][1];hanhchidahoa[0]++;hanhchidahoa[hanhchidahoa[0]]=cantang[temp[1]][1];}else{context.fillText(tru[i-1]+" "+tru[j-1]+" "+tru[k-1]+" tam hội ",35+(8)*w/2,590+4*hh+inrabinhchu*lineskip);inrabinhchu++;}}
temp=checktamhop(achi[i],achi[j],achi[k]);if(temp[0]!=0){var test=0;for(var l=1;l<5;l++)
if(INT((acan[l]+1)/2)==INT((cantang[temp[1]][1]+1)/2))
test=l;g(cantang[temp[1]][1]);cantanghoahop[achi[i]][0]=1;cantanghoahop[achi[j]][0]=1;cantanghoahop[achi[k]][0]=1;cantanghoahop[achi[i]][2]=0;cantanghoahop[achi[j]][2]=0;cantanghoahop[achi[k]][2]=0;cantanghoahop[achi[i]][3]=0;cantanghoahop[achi[j]][3]=0;cantanghoahop[achi[k]][3]=0;context.textAlign='left';if(test!=0){hanhchidahoa[0]++;hanhchidahoa[hanhchidahoa[0]]=cantang[temp[1]][1];context.fillText(tru[i-1]+" "+tru[j-1]+" "+tru[k-1]+" tam hợp hóa "+can[cantang[temp[1]][1]],35+(8)*w/2,590+4*hh+inrabinhchu*lineskip);cantanghoahop[achi[i]][1]=cantang[temp[1]][1];cantanghoahop[achi[j]][1]=cantang[temp[1]][1];cantanghoahop[achi[k]][1]=cantang[temp[1]][1];inrabinhchu++;}else{context.fillText(tru[i-1]+" "+tru[j-1]+" "+tru[k-1]+" tam hợp "+can[cantang[temp[1]][1]],35+(8)*w/2,590+4*hh+inrabinhchu*lineskip);inrabinhchu++;}}}
var hoahopthat=new Array();context.textAlign='left';for(var i=1;i<4;i++)
if(checknhihopcan(acan[i],acan[i+1])!=0)
{hoahopthat[i]=0;for(var k=1;k<=achi[2][0];k++)
if(cantang[achi[2]][k]==checknhihopcan(acan[i],acan[i+1])){hoahopthat[i]=1;}
if(hoahopthat[i]==1)
context.fillText(tru[i-1]+" hợp "+tru[i]+" hóa "+can[checkcan(2*acan[i]+3)],35+(8)*w/2,590+inrabinhchu*hh+2*lineskip);for(var j=1;j<hanhchidahoa[0]+1;j++)
{if(INT((hanhchidahoa[j]-1)/2)==INT((checkcan(2*acan[i]+3)-1)/2))
context.fillText(tru[i-1]+" hợp "+tru[i]+" hóa "+can[checkcan(2*acan[i]+3)]+" theo lệnh",35+(8)*w/2,590+4*hh+inrabinhchu*lineskip);hoahopthat[i]=1;}
if(nguhanhcan(acan[i],cantang[achi[2]][1]))
if(nguhanhcan(cantang[achi[i]][1],acan[i])||nguhanhcan(cantang[achi[i]][1],acan[i]+2))
if(nguhanhcan(cantang[achi[i+1]][1],acan[i])||nguhanhcan(cantang[achi[i+1]][1]+2,acan[i])){context.fillText(tru[i-1]+" và "+tru[i]+"  "+" theo phu thê hóa "+can[checkcan(2*acan[i]+3)],35+(8)*w/2,590+4*hh+inrabinhchu*lineskip);hoahopthat[i]=1;}
if(nguhanhcan(acan[i+1],cantang[achi[2]][1]))
if(nguhanhcan(cantang[achi[i]][1],acan[i+1])||nguhanhcan(cantang[achi[i]][1]+2,acan[i+1]))
if(nguhanhcan(cantang[achi[i+1]][1],acan[i])||nguhanhcan(cantang[achi[i+1]][1]+2,acan[i+1])){context.fillText(tru[i-1]+" và "+tru[i]+"  "+" theo phu thê hóa "+can[checkcan(2*acan[i]+3)],35+(8)*w/2,590+4*hh+inrabinhchu*lineskip);hoahopthat[i]=1;}
if(hoahopthat[i]==1)
inrabinhchu++;}
{var chodua=new Array(11);for(var i=1;i<11;i++)
chodua[i]=0;for(var i=1;i<11;i++){for(var j=1;j<=cantanghoahop[achi[1]][0];j++){if(INT((cantanghoahop[achi[1]][j]+1)/2)==INT((i+1)/2))
chodua[i]=1;}
for(var j=1;j<=cantanghoahop[achi[2]][0];j++){if(INT((cantanghoahop[achi[2]][j]+1)/2)==INT((i+1)/2))
chodua[i]=1;}
for(var j=1;j<=cantanghoahop[achi[3]][0];j++){if(INT((cantanghoahop[achi[3]][j]+1)/2)==INT((i+1)/2))
chodua[i]=1;}
for(var j=1;j<=cantanghoahop[achi[4]][0];j++){if(INT((cantanghoahop[achi[4]][j]+1)/2)==INT((i+1)/2))
chodua[i]=1;}}}
var diemnguhanh=new Array();for(var i=0;i<6;i++)
diemnguhanh[i]=0;for(var i=1;i<5;i++){{if(chodua[acan[i]]==0)
diemnguhanh[convertcan2nguhanh(acan[i])]=diemnguhanh[convertcan2nguhanh(acan[i])]+9;else
diemnguhanh[convertcan2nguhanh(acan[i])]=diemnguhanh[convertcan2nguhanh(acan[i])]+36;}}
context.fillStyle='black';for(var i=1;i<4;i++)
if(checknhihopcan(acan[i],acan[i+1])!=0)
{if((chodua[acan[i]]!=0)||(chodua[acan[i+1]]!=0))
{if(hoahopthat[i]!=1)
{var them=12;if((convertcan2nguhanh(acan[i+1])-convertcan2nguhanh(acan[i])+5)%5==3)
them=6;else
them=-6;diemnguhanh[convertcan2nguhanh(acan[i+1])]=diemnguhanh[convertcan2nguhanh(acan[i+1])]-6+them;diemnguhanh[convertcan2nguhanh(acan[i])]=diemnguhanh[convertcan2nguhanh(acan[i])]-6-them;if((convertcan2nguhanh(acan[i])-convertcan2nguhanh(acan[i-1])+5)%5==2)
if(checknhihopcan(acan[i],acan[i-1])!=0)
diemnguhanh[convertcan2nguhanh(acan[i-1])]=diemnguhanh[convertcan2nguhanh(acan[i-1])]*2/3;}else
{diemnguhanh[convertcan2nguhanh(checkcan(2*acan[i+1]+3))]=diemnguhanh[convertcan2nguhanh(2*acan[i+1]+3)]+60;}}else
{diemnguhanh[convertcan2nguhanh(acan[i])]=diemnguhanh[convertcan2nguhanh(acan[i])]+9;diemnguhanh[convertcan2nguhanh(acan[i+1])]=diemnguhanh[convertcan2nguhanh(acan[i+1])]+9;}}}
var diem=new Array(5);diem=tinhdiem(acan,achi);{var canvas=document.getElementById("myCanvas");var context=canvas.getContext("2d");var lastend=0;var data=diem;var myTotal=0;for(var e=0;e<data.length;e++){myTotal+=data[e];}
var test=0;for(var i=0;i<data.length;i++){context.shadowColor='#657383';context.shadowBlur=20;context.shadowOffsetX=5;context.shadowOffsetY=5;context.fillStyle=myColor[i];context.beginPath();context.moveTo(160,380);context.arc(160,380,120,Math.PI*2*test,Math.PI*2*test+(Math.PI*2*(data[i]/myTotal)),false);context.lineTo(160,380);context.fill();context.closePath();lastend+=Math.PI*2*(data[i]/myTotal);context.shadowColor='0';context.shadowBlur=0;context.shadowOffsetX=0;context.shadowOffsetY=0;context.shadowColor='0';context.shadowBlur=0;context.shadowOffsetX=0;context.shadowOffsetY=0;context.fillStyle=myColor[i];context.beginPath();context.moveTo(160,380);context.arc(160,380,120,Math.PI*2*test,Math.PI*2*test+(Math.PI*2*(data[i]/myTotal)),false);context.lineTo(160,380);context.fill();context.closePath();test=test+(data[i]/myTotal);lastend+=Math.PI*2*(data[i]/myTotal);}}{function bracket(xx,yy,l){context.save();context.translate(xx,yy);context.rotate(-Math.PI/2);y=l;var linelength=(y-60)/2;context.lineWidth=1;context.beginPath();context.moveTo(27,10);context.arcTo(20,10,20,20,7);context.lineTo(20,20+linelength);context.arcTo(20,30+linelength,0,30+linelength,7);context.arcTo(20,30+linelength,20,40+linelength,7);context.lineTo(20,y-20);context.arcTo(20,y-10,30,y-10,7);context.stroke();context.restore();}
function drawArrow(fromx,fromy,tox,toy){var c=document.getElementById("myCanvas");var context=c.getContext("2d");var headlen=10;var angle=Math.atan2(toy-fromy,tox-fromx);context.beginPath();context.moveTo(fromx,fromy);context.lineTo(tox,toy);context.lineWidth=2;context.stroke();context.beginPath();context.moveTo(tox,toy);context.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));context.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),toy-headlen*Math.sin(angle+Math.PI/7));context.lineTo(tox,toy);context.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));context.lineWidth=2;context.stroke();context.fill();}
if(checkcan(acan[1]-acan[2]+10)==5){context.strokeStyle=g(checkcan(2*acan[1]+3));bracket(w/2,625+hh/2,6+w);}
if(checkcan(acan[3]-acan[2]+10)==5){context.strokeStyle=g(checkcan(2*acan[3]+3));bracket(3*w/2,625+hh/2,50+w);}
if(checkcan(acan[3]-acan[4]+10)==5){context.strokeStyle=g(checkcan(2*acan[3]+3));bracket(5*w/2,625+hh/2,50+w);}
if(check(achi[1]+achi[2]+12)==3){bracket(w/2,630+3*hh/2,50+w);}
if(check(achi[3]+achi[2]+12)==3){bracket(3*w/2,630+3*hh/2,50+w);}
if(check(achi[3]+achi[4]+12)==3){bracket(5*w/2,630+3*hh/2,50+w);}
if(check(achi[3]-achi[4]+12)==6){h(achi[4]);drawArrow(30+5*w/2,616+3*hh/2,30+7*w/2,616+3*hh/2);drawArrow(30+7*w/2,616+3*hh/2,30+5*w/2,616+3*hh/2);}
if(check(achi[3]-achi[2]+12)==6){h(achi[2]);drawArrow(30+5*w/2,616+3*hh/2,30+3*w/2,616+3*hh/2);drawArrow(30+3*w/2,616+3*hh/2,30+5*w/2,616+3*hh/2);}
if(check(achi[1]-achi[2]+12)==6){h(achi[1]);drawArrow(30+w/2,616+3*hh/2,30+3*w/2,616+3*hh/2);drawArrow(30+3*w/2,616+3*hh/2,30+w/2,616+3*hh/2);}
if(check(achi[1]-achi[3]+12)==6){h(achi[3]);drawArrow(30+w/2,640+3*hh/2,30+5*w/2,640+3*hh/2);drawArrow(30+5*w/2,640+3*hh/2,30+w/2,640+3*hh/2);}
if(check(achi[2]-achi[4]+12)==6){h(achi[2]);drawArrow(30+3*w/2,640+3*hh/2,30+7*w/2,640+3*hh/2);drawArrow(30+7*w/2,640+3*hh/2,30+3*w/2,640+3*hh/2);}
if(check(achi[1]-achi[4]+12)==6){h(achi[1]);drawArrow(30+w/2,620+3*hh/2,30+7*w/2,620+3*hh/2);drawArrow(30+7*w/2,620+3*hh/2,30+w/2,620+3*hh/2);}
var canvas=document.getElementById('myCanvas');var context=canvas.getContext('2d');}{function arrowcurve(x_1,y_1,x_2,y_2,x_3,y_3){var d=25;context.beginPath();context.beginPath();context.moveTo(x_1,y_1);var xx=0.3*x_3+0.1*x_2+0.6*x_1;var yy=0.5*y_3+0.1*y_2+0.4*y_1;context.quadraticCurveTo(xx,yy,x_2,y_2);if(Math.abs(y_1-y_2)+Math.abs(x_1-x_2)<250)
d=25;if(Math.abs(y_1-y_2)+Math.abs(x_1-x_2)>500)
d=35;var nhon=0.1;if(Math.abs(y_1-y_2)+Math.abs(x_1-x_2)>550)
nhon=0.07;context.stroke();var dx=x_2-0.95*xx-0.05*x_1,dy=y_2-0.95*yy-0.05*y_1;var len=Math.sqrt(dx*dx+dy*dy);var goc1=Math.atan2(dx,dy);var goc;goc=goc1;context.lineCap='round';context.beginPath();context.moveTo(x_2,y_2);context.lineTo(x_2-d*Math.sin(goc+nhon),y_2-d*Math.cos(goc+nhon));context.lineTo(x_2-d*Math.sin(goc-nhon),y_2-d*Math.cos(goc-nhon));context.lineWidth=1;context.closePath();context.stroke();context.fill();}
function hinh(a,b){var test="0";if((a==1)&&(b==4))
test="Hình hại vô lễ";if((a==4)&&(b==1))
test="Hình hại vô lễ";if((a==2)&&(b==8))
test="Hình hại đặc quyền";if((a==8)&&(b==11))
test="Hình hại đặc quyền";if((a==3)&&(b==6))
test="Hình hại vong ân";if((a==6)&&(b==9))
test="Hình hại vong ân";if((a==9)&&(b==3))
test="Hình hại vong ân";return test;}
if(hinh(achi[3],achi[2])!="0"){h(achi[3]);arrowcurve(30+5*w/2,630+hh,30+3*w/2,630+hh+1,30+3*w/2,630+hh+1+40);}
if(hinh(achi[3],achi[1])!="0"){h(achi[3]);arrowcurve(30+5*w/2,630+hh,30+w/2,630+hh+1,30+w/2,630+hh+1+40);}
if(hinh(achi[3],achi[4])!="0"){h(achi[3]);arrowcurve(30+5*w/2,630+hh,30+7*w/2,630+hh+1,30+7*w/2,630+hh+40);}
if(hinh(achi[2],achi[3])!="0"){h(achi[2]);arrowcurve(30+3*w/2,630+hh,30+5*w/2,630+hh+1,30+3*w/2,630+hh+1+40);}
if(hinh(achi[2],achi[1])!="0"){h(achi[2]);arrowcurve(30+3*w/2,630+hh,30+w/2,630+hh+1,30+3*w/2,630+hh+1+40);}
if(hinh(achi[2],achi[4])!="0"){h(achi[2]);arrowcurve(30+3*w/2,630+hh,30+7*w/2,630+hh+1,30+3*w/2,630+hh+1+40);}
if(hinh(achi[1],achi[3])!="0"){h(achi[1]);arrowcurve(30+w/2,630+hh,30+5*w/2,630+hh+1,30+w/2,630+hh+1+40);}
if(hinh(achi[1],achi[2])!="0"){h(achi[1]);arrowcurve(30+w/2,630+hh,30+3*w/2,630+hh+1,30+w/2,630+hh+1+40);}
if(hinh(achi[1],achi[4])!="0"){h(achi[1]);arrowcurve(30+w/2,630+hh,30+7*w/2,630+hh+1,30+w/2,630+hh+1+40);}
if(hinh(achi[4],achi[3])!="0"){h(achi[4]);arrowcurve(30+7*w/2,630+hh,30+5*w/2,630+hh+1,30+7*w/2,630+hh+1);}
if(hinh(achi[4],achi[2])!="0"){h(achi[4]);arrowcurve(30+7*w/2,630+hh,30+3*w/2,630+hh+1,30+7*w/2,630+hh+1+40);}
if(hinh(achi[4],achi[1])!="0"){h(achi[4]);arrowcurve(30+7*w/2,630+hh,30+w/2,630+hh+1,307*w/2,630+hh+1+40);}}{var data=[10,10,10,10,10,10,10,10,10,10];var myTotal=0;for(var e=0;e<data.length;e++){myTotal+=data[e];}
var test=0;context.lineWidth=1;for(var i=0;i<data.length;i++){context.shadowColor='#657383';context.shadowBlur=0;context.shadowOffsetX=0;context.shadowOffsetY=0;if((i%2)==0){context.fillStyle='#FFFFFF'}else{context.fillStyle='#EFFBFB';}
context.beginPath();context.moveTo(xtron,ytron);context.arc(xtron,ytron,rtron,Math.PI*2*test,Math.PI*2*test+(Math.PI*2*(data[i]/myTotal)),false);context.lineTo(xtron,ytron);context.stroke();context.fill();context.closePath();test=test+(data[i]/myTotal);lastend+=Math.PI*2*(data[i]/myTotal);}
test=0;for(var i=0;i<data.length;i++){context.closePath();var mauphu=INT((acan[3]+1)/2)+INT(i/2)+8;if(mauphu>4)
mauphu=mauphu-5;if(mauphu>4)
mauphu=mauphu-5;if(mauphu>4)
mauphu=mauphu-5;if(mauphu>4)
mauphu=mauphu-5;context.fillStyle=myColor[mauphu];context.beginPath();context.moveTo(xtron,ytron);context.arc(xtron,ytron,rtron/5,30/10*Math.PI+Math.PI*2*test,30/10*Math.PI+Math.PI*2*test+(Math.PI*2*(data[i]/myTotal)),false);context.lineTo(xtron,ytron);context.fill();context.closePath();test=test+(data[i]/myTotal);lastend+=Math.PI*2*(data[i]/myTotal);}
var canvas=document.getElementById('myCanvas');var context=canvas.getContext('2d');function textrotate(text,xgoc,ygoc,x,y,vitri){context.save();context.translate(xgoc+x,ygoc+y);context.rotate(vitri*Math.PI*2/10);context.textAlign='center';context.fillText(text,0,0);context.restore();}
function ancantutru(sao,vitri){vitri=vitri;context.textAlign=" center";textrotate(sao,xtron,ytron,Math.sin(vitri*2*Math.PI/10)*rtron*1.1*((10-tronrow[vitri])/10),-Math.cos(vitri*2*Math.PI/10)*rtron*1.1*((10-tronrow[vitri])/10),vitri);tronrow[vitri]++;}
context.font='bold 14pt Arial';var tronrow=new Array(11);for(var i=0;i<11;i++)
tronrow[i]=-0.3;for(var i=0;i<10;i++){g(checkcan(i+acan[3]+9));ancantutru(muoithan[i],i);}
context.font='11pt Arial';for(var i=1;i<11;i++){g(i);ancantutru(can[i]+" "+diemcan[i],thapthan(acan[3],i));}
g(acan[3]);ancantutru("Can Ngày",thapthan(acan[3],acan[3]));g(acan[2]);ancantutru("Can thang",thapthan(acan[3],acan[2]));g(acan[1]);ancantutru("Can Năm",thapthan(acan[3],acan[1]));g(acan[4]);ancantutru("Can Giờ",thapthan(acan[3],acan[4]));for(var i=1;i<(cantang[achi[4]][0]+1);i++){g(cantang[achi[4]][i]);ancantutru("Chi Giờ "+i,thapthan(acan[3],cantang[achi[4]][i]));}
for(var i=1;i<(cantang[achi[2]][0]+1);i++){g(cantang[achi[2]][i]);ancantutru("Chi Giờ "+i,thapthan(acan[3],cantang[achi[2]][i]));}
for(var i=1;i<(cantang[achi[3]][0]+1);i++){g(cantang[achi[3]][i]);ancantutru("Chi Giờ "+i,thapthan(acan[3],cantang[achi[3]][i]));}
for(var i=1;i<(cantang[achi[1]][0]+1);i++){g(cantang[achi[1]][i]);ancantutru("Chi Giờ "+i,thapthan(acan[3],cantang[achi[1]][i]));}}
{context.font=' 9pt Arial';context.textAlign="left";ankhoiviet(cannam,"N. ");ankhoiviet(canngay,"Nh. ");if(thaicuc(acan[3])=="tuquy"){anthansat("Thái Cực",2);anthansat("Thái Cực",5);anthansat("Thái Cực",8);anthansat("Thái Cực",11);}else
anthansat("Thái Cực",thaicuc(acan[3]));thienduc(check(achi[2]-2));nguyetduc(achi[2]);if(tamky(acan[1],acan[2],acan[3])!="false")
anthansat(tamky(acan[1],acan[2],acan[3]),1);if(tamky(acan[2],acan[3],acan[4])!="false")
anthansat(tamky(acan[2],acan[3],acan[4]),2);anthansat("Nh. Thiên Phúc",phuctinh(acan[3]));anthansat("Thiên Phúc",phuctinh(acan[1]));anthansat("Văn Xương",vanxuongquynhan(acan[3]));anthansat("Nh. Lộc Tồn",locton(acan[3]));anthansat("Lộc Tồn",locton(acan[1]));anthansat("Kình Dương",locton(acan[3]));anthansat("Quốc Ấn",quocanquynhan(acan[3]));anthansat("Thiên Y",thieny(achi[2])-2);anthansat("Kim Dư",quocanquynhan(acan[3]));anthansat("Nh. Kim Dư",quocanquynhan(acan[1]));ductu(achi[2]);if(achi[3]%4==1)
anthansat("Thiên Mã",3);if(achi[3]%4==2)
anthansat("Thiên Mã",12);if(achi[3]%4==3)
anthansat("Thiên Mã",9);if(achi[3]%4==0)
anthansat("Thiên Mã",6);if(achi[3]%4==1)
anthansat("Tướng Mã",1);if(achi[3]%4==2)
anthansat("Tướng Mã",10);if(achi[3]%4==3)
anthansat("Tướng Mã",7);if(achi[3]%4==0)
anthansat("Tướng Mã",4);if(achi[3]%4==1)
anthansat("Hoa Cái",5);if(achi[3]%4==2)
anthansat("Hoa Cái",2);if(achi[3]%4==3)
anthansat("Hoa Cái",11);if(achi[3]%4==0)
anthansat("Hoa Cái",8);if(achi[3]%4==1)
anthansat("Vong Thần",12);if(achi[3]%4==2)
anthansat(" Vong Thần",9);if(achi[3]%4==3)
anthansat(" Vong Thần",6);if(achi[3]%4==0)
anthansat(" Vong Thần",3);if(achi[3]%4==1)
anthansat("Kiếp Sát",6);if(achi[3]%4==2)
anthansat(" Kiếp Sát",3);if(achi[3]%4==3)
anthansat(" Kiếp Sát",12);if(achi[3]%4==0)
anthansat(" Kiếp Sát",9);if(achi[3]%4==1)
anthansat("Tai Sát",7);if(achi[3]%4==2)
anthansat(" Tai Sát",4);if(achi[3]%4==3)
anthansat(" Tai Sát",1);if(achi[3]%4==0)
anthansat(" Tai Sát",10);if(INT((check((achi[3]+1))-1)/4)==0){anthansat("Cô Thần",3);anthansat("Quả Tú",11);}
if(INT((check((achi[3]+1))-1)/4)==1){anthansat("Cô Thần",6);anthansat("Quả Tú",2);}
if(INT((check((achi[3]+1))-1)/4)==0){anthansat("Cô Thần",9);anthansat("Quả Tú",5);}
if(INT((check((achi[3]+1))-1)/4)==0){anthansat("Cô Thần",12);anthansat("Quả Tú",8);}
if(gioitinh==1)
if(achi[1]%2==1){anthansat("Cấu",check(achi[1]+3));anthansat("Giảo",check(achi[1]-3));anthansat("Đại Hao",check(achi[1]+7));}
if(gioitinh!=1)
if(achi[1]%2!=1){anthansat("Cấu",check(achi[1]+3));anthansat("Đại Hao",check(achi[1]+7));anthansat("Giảo",check(achi[1]-3));}
if(gioitinh!=1)
if(achi[1]%2==1){anthansat("Giảo",check(achi[1]+3));anthansat("Đại Hao",check(achi[1]+5));anthansat("Cấu",check(achi[1]-3));}
if(gioitinh!=1)
if(achi[1]%2==1){anthansat("Giảo",check(achi[1]+3));anthansat("Đại Hao",check(achi[1]+5));anthansat("Cấu",check(achi[1]-3));}
function khongvong(i,j){return check(j+11-i);}
anthansat("Tuần Không",khongvong(acan[3],achi[3]));anthansat("Tuần Không",check(khongvong(acan[3],achi[3])+1));for(var i=1;i<5;i++){if((khongvong(acan[i],achi[i])==anloc(i))||((khongvong(acan[i],achi[i])==check(anloc(i)+1))))
{ansaott("Thập Ác Đại Bại",i);}}
for(var i=3;i<5;i++)
if(coloan(acan[i],achi[i],achi[2])==1)
{ansaott("Cô Loan",i);}
for(var i=1;i<5;i++)
if(thienxa(acan[i],achi[i],achi[2])==1){context.fillText("Thiên Xá",(2*i-2)*w/2+40,thansat[i]*lineskip+800);thansat[i]++;}
for(var i=1;i<5;i++)
if(tuphe(acan[i],achi[i],achi[2])==1){context.fillText("Tứ Phế",(2*i-2)*w/2+40,thansat[i]*lineskip+800);thansat[i]++;}
khoicanh(acan[3],achi[3]);khoicanh(acan[3],achi[3],3);khoicanh(acan[4],achi[4],4);}
var begintime1=new Date();dataURL=canvas.toDataURL();image4me=dataURL;return dataURL;}