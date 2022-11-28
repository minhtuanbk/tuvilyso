var myColor = ["green", "red", "yellow", "grey", "black"];

function vetuhoa(l, t, e) {
    var i = document.getElementById("myCanvas").getContext("2d");
    i.lineWidth = 1, i.closePath()
}

function timcuc(l, t) { var e, i, n, h; return 1 != t && 7 != t && 2 != t && 8 != t || (e = 0), 11 != t && 12 != t && 5 != t && 6 != t || (e = 2), 3 != t && 4 != t && 9 != t && 10 != t || (e = 1), 1 != l && 2 != l || (i = 1), 3 != l && 4 != l || (i = 2), 5 != l && 6 != l || (i = 3), 7 != l && 8 != l || (i = 4), 9 != l && 10 != l || (i = 5), n = e + i, e + i > 5 && (n = e + i - 5), 1 == n && (h = 4), 2 == n && (h = 2), 3 == n && (h = 6), 4 == n && (h = 5), 5 == n && (h = 3), h }
var cung = new Array;
cung[1] = "MỆNH", cung[2] = "PHỤ MẪU", cung[3] = "PHÚC ĐỨC", cung[4] = "ĐIỀN TRẠCH", cung[5] = "QUAN LỘC", cung[6] = "GIAO HỮU", cung[7] = "THIÊN DI", cung[8] = "TẬT ÁCH", cung[9] = "TÀI BẠCH", cung[10] = "TỬ NỮ", cung[11] = "PHU THÊ", cung[12] = "HUYNH ĐỆ";
var pcung = ["", "mệnh", "phụ", "phúc", "điền", "quan", "nô", "di", "tật", "tài", "tử", "phu", "bào"];

function nhapdulieutuvi() {
    var l = document;
    l.getElementById("ID_size");
    sizesize = parseInt(l.getElementById("ID_size").value), saothem = l.getElementById("ID_SAO").value, vitrithem = parseInt(l.getElementById("ID_VITRI").value), saothem1 = l.getElementById("ID_SAO1").value, vitrithem1 = parseInt(l.getElementById("ID_VITRI1").value), saothem2 = l.getElementById("ID_SAO2").value, vitrithem2 = parseInt(l.getElementById("ID_VITRI2").value), saothem3 = l.getElementById("ID_SAO3").value, vitrithem3 = parseInt(l.getElementById("ID_VITRI3").value), id_thaitue = 1, id_tapdieu = 1, id_tuongtinh = 1, ID_LUUNHAT = 1, ID_LUUTHOI = 1, id_luunien = 0, id_luunguyet = 0, id_luudaivan = 0, temppp, id_phieuphieu = 0, id_vdttl = 0, id_vdttlhl = 0, ID_VEPHIEUPHIEU, id_phieuphieuvan = 0, l.getElementById("ID_LUUDAIVAN").checked && (id_luudaivan = 1), l.getElementById("ID_LUUNIEN").checked && (id_luunien = 1), l.getElementById("ID_LUUNGUYET").checked && (id_luunguyet = 1), l.getElementById("ID_TAPDIEU").checked || (id_tapdieu = 0), l.getElementById("ID_THAITUE").checked || (id_thaitue = 0), l.getElementById("ID_TUONGTINH").checked || (id_tuongtinh = 0), id_vdttl = parseInt(l.getElementById("ID_VDTTL").value), id_vdttlhl = parseInt(l.getElementById("ID_VDTTLHL").value), l.getElementById("ID_LUUTHOI").checked || (ID_LUUTHOI = 0), l.getElementById("ID_LUUNHAT").checked ? ID_LUUNHAT = 1 : ID_LUUNHAT = 0, ID_VEPHIEUPHIEU = 1, l.getElementById("ID_VEPHIEUPHIEU").checked || (ID_VEPHIEUPHIEU = 0), l.getElementById("ID_PHIEUPHIEU").checked && (id_phieuphieu = 1)
}
var nh = new Array(11);
for (i = 1; i < 13; i++) nh[i] = new Array(12);
nh[1][1] = nh[2][2] = "Hải Trung Kim", nh[3][3] = nh[4][4] = "Lư Trung Hỏa", nh[5][5] = nh[6][6] = "Đại Lâm Mộc", nh[7][7] = nh[8][8] = "Lộ Bàng Thổ", nh[9][9] = nh[10][10] = "Kiếm Phong Kim", nh[1][11] = nh[2][12] = "Sơn Đầu Hỏa", nh[3][1] = nh[4][2] = "Giản Hạ Thủy", nh[5][3] = nh[6][4] = "Thành Đầu Thổ", nh[7][5] = nh[8][6] = "Bạch Lạp Kim", nh[9][7] = nh[10][8] = "Dương Liễu Mộc", nh[1][9] = nh[2][10] = "Tinh Tuyền Thủy", nh[3][11] = nh[4][12] = "Ốc Thượng Thổ", nh[5][1] = nh[6][2] = "Tích Lịch Hỏa", nh[7][3] = nh[8][4] = "Tùng Bách Mộc", nh[9][5] = nh[10][6] = "Trường Lưu Thủy", nh[1][7] = nh[2][8] = "Sa Trung Kim", nh[3][9] = nh[4][10] = "Sơn Hạ Hỏa", nh[5][11] = nh[6][12] = "Bình Địa Mộc", nh[7][1] = nh[8][2] = "Bích Thượng Thổ", nh[9][3] = nh[10][4] = "Kim Bá Kim", nh[1][5] = nh[2][6] = "Phú Đăng Hỏa", nh[3][7] = nh[4][8] = "Thiên Hà Thủy", nh[5][9] = nh[6][10] = "Đại Dịch Thổ", nh[7][11] = nh[8][12] = "Thoa Xuyến Kim", nh[9][1] = nh[10][2] = "Tang Đố Mộc", nh[1][3] = nh[2][4] = "Đại Khuê Thủy", nh[3][5] = nh[4][6] = "Sa Trung Thổ", nh[5][7] = nh[6][8] = "Thiên Thượng Hỏa", nh[7][9] = nh[8][10] = "Thạch Lựu Mộc", nh[9][11] = nh[10][12] = "Đại Hải Thủy";
var hanh = new Array;
hanh[2] = "Thủy Nhị Cục", hanh[3] = "Mộc Tam Cục", hanh[4] = "Kim Tứ Cục", hanh[5] = "Thổ Ngũ Cục", hanh[6] = "Hỏa Lục Cục";
for (var dataURL, tinhhe = new Array(12), i = 1; i < 13; i++) tinhhe[i] = new Array(12);
for (i = 1; i < 13; i++)
    for (var j = 1; j < 13; j++) tinhhe[i][j] = "Mệnh Vô Chính Diệu";

function h(l) { var t, e, i = document.getElementById("myCanvas").getContext("2d"); return 8 != l && 2 != l && 5 != l && 11 != l || (t = 3), 3 != l && 4 != l || (t = 1), 7 != l && 6 != l || (t = 2), 12 != l && 1 != l || (t = 5), 9 != l && 10 != l || (t = 4), 5 == t && (e = "black"), 2 == t && (e = "#F20D2E"), 1 == t && (e = "#228B22"), 4 == t && (e = "purple"), 3 == t && (e = "#F9AA07"), i.fillStyle = e, i.strokeStyle = e, e }

function g(l) { var t, e, i = document.getElementById("myCanvas").getContext("2d"); return 1 != l && 2 != l || (t = 1), 3 != l && 4 != l || (t = 2), 5 != l && 6 != l || (t = 3), 7 != l && 8 != l || (t = 4), 9 != l && 10 != l || (t = 5), 5 == t && (e = "black"), 2 == t && (e = "#F20D2E"), 1 == t && (e = "#228B22"), 4 == t && (e = "purple"), 3 == t && (e = "#F9AA07"), i.fillStyle = e, i.strokeStyle = e, e }

function f(l, t) {
    var e, i = document.getElementById("myCanvas").getContext("2d");
    1 != t && 7 != t && 2 != t && 8 != t || (e = 0), 11 != t && 12 != t && 5 != t && 6 != t || (e = 2), 3 != t && 4 != t && 9 != t && 10 != t || (e = 1), (e += Math.floor(.5 * (l + 1))) > 5 && (e -= 5), 2 == e && (i.fillStyle = "black"), 1 == e && (i.fillStyle = "purple"), 3 == e && (i.fillStyle = "#F20D2E"), 4 == e && (i.fillStyle = "#F9AA07"), 5 == e && (i.fillStyle = "#228B22")
}

function bacot(t, e, i, n, c, a, r, T, o, u, k, y, A, p, d, m) {
    var x = new Array,
        v = new Array,
        I = new Array,
        H = new Array;
    H[1] = "G.", H[2] = "Ấ.", H[3] = "B.", H[4] = "Đ.", H[5] = "M.", H[6] = "K.", H[7] = "C.", H[8] = "T.", H[9] = "N.", H[10] = "Q.", H[11] = ".", H[12] = "Ấ.", H[0] = "Quý";
    var S = new Array;
    S[1] = "9", S[2] = "8", S[3] = "7", S[4] = "6", S[5] = "5", S[6] = "9", S[7] = "8", S[8] = "7", S[9] = "6", S[10] = "5", S[11] = "9", S[12] = "8", S[0] = "Quý";
    var s = new Array;
    s[1] = "9", s[2] = "8", s[3] = "7", s[4] = "6", s[5] = "5", s[6] = "4", s[7] = "9", s[8] = "8", s[9] = "7", s[10] = "6", s[11] = "5", s[12] = "4", s[0] = "Hợi";
    var b = new Array;
    b[1] = "TỬ VI ", b[2] = "LIÊM TRINH. ", b[3] = "THIÊN ĐỒNG ", b[4] = "VŨ KHÚC.-", b[5] = "THÁI DƯƠNG ", b[6] = "THIÊN CƠ ", b[7] = "THIÊN PHỦ ", b[8] = "THÁI ÂM ", b[9] = "THAM LANG.+", b[10] = "CỰ MÔN.+", b[11] = "THIÊN TƯỚNG ", b[12] = "THIÊN LƯƠNG ", b[13] = "THẤT SÁT ", b[14] = "PHÁ QUÂN. ";
    var B = new Array;
    B[1] = "Chủ Nhật", B[2] = "Thứ Hai", B[3] = "Thứ Ba", B[4] = "Thứ Tư", B[5] = "Thứ Năm", B[6] = "Thứ Sáu", B[7] = "Thứ Bảy";
    var D = new Date;
    remember = 1;
    new Array;
    var M = new Array,
        N = new Array,
        F = new Array,
        _ = 20,
        L = 20,
        E = Rl = 150,
        P = Rl,
        C = Zl = Jl = (Yl = (Xl = (Ol = 20) + 170) + 170) + 170,
        V = (lt = ($l = (jl = Rl) + 300) + 300) + 300,
        U = Zl,
        w = tt = Ql = (Gl = (ql = Rl + 300) + 300) + 300,
        K = (et = (zl = 20) + 170) + 170;
    M[1] = jl, M[2] = P, M[3] = E, M[4] = Rl, M[5] = ql, M[6] = Gl, M[7] = Ql, M[8] = tt, M[9] = w, M[10] = V, M[11] = lt, M[12] = $l, M[0] = M[12], M[-1] = M[11], N[1] = Jl, N[2] = Yl, N[3] = Xl, N[4] = Ol, N[5] = _, N[6] = L, N[7] = zl, N[8] = et, N[9] = K, N[10] = U, N[11] = C, N[12] = Zl, N[0] = N[12], N[-1] = N[11], N[13] = N[1], M[13] = M[1], F[1] = "MỆNH", F[2] = "PHỤ MẪU", F[3] = "PHÚC ĐỨC", F[4] = "ĐIỀN TRẠCH", F[5] = "QUAN LỘC", F[6] = "GIAO HỮU", F[7] = "THIÊN DI", F[8] = "TẬT ÁCH", F[9] = "TÀI BẠCH", F[10] = "TỬ NỮ", F[11] = "PHU THÊ", F[12] = "HUYNH ĐỆ";
    var W = new Array,
        R = new Array;
    W[1] = jl + 150, W[2] = P + 150, W[3] = E + 150, W[4] = Rl + 150, W[5] = ql, W[6] = Gl, W[7] = Ql - 150, W[8] = tt - 150, W[9] = w - 150, W[10] = V - 150, W[11] = lt, W[12] = $l, R[1] = Jl - 20, R[2] = Yl + 80, R[3] = Xl + 80, R[4] = Ol + 150, R[5] = _ + 150, R[6] = L + 150, R[7] = zl + 150, R[8] = et + 80, R[9] = K + 80, R[10] = U - 20, R[11] = C - 20, R[12] = Zl - 20, nhapdulieutuvi();
    for (var O = 1; O <= 12; O++) I[O] = 0;
    for (O = 1; O <= 12; O++) x[O] = 1;
    for (O = 1; O <= 12; O++) v[O] = 1; {
        function q(l, t, e, i) { var n; return cl = 14, t < 0 && (t += 12), n = check(t), t < 0 && (t += 12), n = check(t), n = check(n), nl.fillStyle = i, 0 == l && x[n] > 7 && (l = 1), 1 == l && v[n] > 7 && x[n] < 8 && (l = 0), 1 == l && v[n] > 7 && x[n] > 7 && (l = 2), 1 == l && v[n] < 8 && (nl.fillText(e, M[n] - 32 - 15, N[n] + cl * v[n] - cl + 50 - 7), v[n]++), 0 == l && x[n] < 8 && (nl.fillText(e, M[n] - 32 - 110, N[n] + cl * x[n] - cl + 50 - 7), x[n]++), 0 == id_phieuphieu && 2 == l && (nl.fillText(e, M[n] - 38 + 90, N[n] + cl * (4 + I[n]) - cl + 42), I[n]++), 1 == id_phieuphieu && 2 == l && (1 == I[n] && nl.fillText(e, M[n] - 38 + 90, N[n] + cl * (4 + I[n]) - cl + 42), I[n]++), n }
    } {
        function G(l, t) {
            var e;
            3 == l || 7 == l || 11 == l ? e = 7 : 4 == l || 8 == l || 12 == l ? e = 4 : 5 == l || 9 == l || 1 == l ? e = 1 : 6 != l && 10 != l && 2 != l || (e = 10), q(0, e, t + "Thiên Mã ", "#F20D2E")
        }

        function Q(l, t) { nl.font = " 9pt Arial", q(0, [0, 4, 5, 7, 8, 7, 8, 10, 11, 1, 2][l], t + "V. Xương ", "purple"), nl.font = " 9pt Arial", q(0, [0, 8, 7, 5, 4, 5, 4, 2, 1, 11, 10][l], t + "V. Khúc ", "#030401") }

        function z(l, t) { var e, i, n, h = [0, 1, 2, 4, 5, 4, 5, 7, 8, 10, 11]; return e = h[l] + 1, i = h[l] + 11, nl.font = "  8pt Arial", q(0, h[l], t + "Lộc Tồn ", "#F9AA07"), nl.font = "  8pt Arial", n = i % 3 == 0 ? " (M)" : " (H)", q(1, e, t + "Kình D. " + (e % 3 == 0 ? " (M)" : " (H)"), "purple"), nl.font = "  8pt Arial", nl.font = "  8pt Arial", q(1, i, t + "Đà La " + n, "purple"), h[l] }

        function X(l, t) {
            var e = [0, 6, 7, 8, 10, 12, 11, 12, 1, 2, 4],
                i = [0, 12, 11, 10, 8, 6, 7, 6, 5, 4, 2];
            "" == t ? (q(0, e[l], t + "THIÊN KHÔI ", "#F20D2E"), q(0, i[l], t + "THIÊN VIỆT ", "#F20D2E")) : (q(0, e[l], t + "Thiên Khôi ", "#F20D2E"), q(0, i[l], t + "Thiên Việt ", "#F20D2E"))
        }

        function Y(l, t, e, i) { var n; return cl = 14, l < 0 && (l += 12), n = check(l), l += 12, n = check(l), n = check(n), nl.fillStyle = e, nl.fillText(t, M[n] - 38 + 90, N[n] + cl * i - 6 - cl - 62), n }

        function j(l, t, e, i) { var n; return cl = 14, l < 0 && (l += 12), n = check(l), l += 12, n = check(l), n = check(n), nl.fillStyle = e, nl.fillText(t, M[n] - 38 + 90, N[n] + cl * (i + 3) - 6 - cl - 63), n }
    } {
        function J(l, t, e) {
            nl.font = "   8pt Arial";
            var n = 2 + i,
                h = 22 - i;
            1 == l && (Sl = Hl + 10), 2 == l && (Sl = Hl + 5), 3 == l && (Sl = Il + 11), 4 == l && (Sl = Il + 7), 5 == l && (Sl = Hl + 1), 6 == l && (Sl = Hl + 2), 7 == l && (Sl = Il + 8), 8 == l && (Sl = Il + 9), 9 == l && (Sl = Il), 10 == l && (Sl = Hl + 3), Sl = check(Sl), nl.fillStyle = "#F20D2E", nl.textAlign = "left", q(0, Sl, e + "Hóa Quyền", "red"), 1 == l && (Sl = Il + 8), 2 == l && (Sl = Il), 3 == l && (Sl = Bl), 4 == l && (Sl = Il + 11), 5 == l && (Sl = h), 6 == l && (Sl = Hl + 5), 7 == l && (Sl = Hl + 1), 8 == l && (Sl = Dl), 9 == l && (Sl = n), 10 == l && (Sl = Hl + 1), Sl = check(Sl), nl.fillStyle = "#228B22", nl.textAlign = "left", q(0, Sl, e + "Hóa Khoa ", "#228B22")
        }

        function Z(l, e, n, h, c) {
            var a, f, r, T = document.getElementById("myCanvas").getContext("2d");
            rt = al;
            r = checkcan(2 * t + 1);
            (r = r + l - 1) > 10 && (r -= 10), T.font = " 8pt Arial", 1 == r && (Sl = Il + 4), 2 == r && (Sl = Il + 11), 3 == r && (Sl = Il + 7), 4 == r && (Sl = Hl + 1), 5 == r && (Sl = Hl + 2), 6 == r && (Sl = Il + 8), 7 == r && (Sl = Il + 9), 8 == r && (Sl = Hl + 3), 9 == r && (Sl = Hl + 5), 10 == r && (Sl = Hl + 10), Sl = check(Sl), T.fillStyle = "#228B22", T.textAlign = "left", j(l, l == Sl ? "Lộc tự hóa" : e + pcung[check(Sl - rt + 13)], "#148AFF", 9), pp[check(l - rt + 13)][1] = check(Sl - rt + 13), philoc[l] = Sl, a = Sl, T.font = " 8pt Arial";
            var o = 2 + i,
                g = 22 - i;
            1 == r && (Sl = Hl + 10), 2 == r && (Sl = Hl + 5), 3 == r && (Sl = Il + 11), 4 == r && (Sl = Il + 7), 5 == r && (Sl = Hl + 1), 6 == r && (Sl = Hl + 2), 7 == r && (Sl = Il + 8), 8 == r && (Sl = Il + 9), 9 == r && (Sl = Il), 10 == r && (Sl = Hl + 3), Sl = check(Sl), T.fillStyle = "red", j(l, l == Sl ? "Quyền tự hóa" : h + pcung[check(Sl - rt + 13)], "red", 10), pp[check(l - rt + 13)][2] = check(Sl - rt + 13), T.textAlign = "left", 1 == r && (Sl = Il + 8), 2 == r && (Sl = Il), 3 == r && (Sl = Bl), 4 == r && (Sl = Il + 11), 5 == r && (Sl = g), 6 == r && (Sl = Hl + 5), 7 == r && (Sl = Hl + 1), 8 == r && (Sl = Dl), 9 == r && (Sl = o), 10 == r && (Sl = Hl + 1), Sl = check(Sl), T.fillStyle = "", j(l, l == Sl ? "Khoa tự hóa" : c + pcung[check(Sl - rt + 13)], "#228B22", 11), pp[check(l - rt + 13)][3] = check(Sl - rt + 13), 1 == r && (Sl = Il + 9), 2 == r && (Sl = Hl + 1), 3 == r && (Sl = Il + 4), 4 == r && (Sl = Hl + 3), 5 == r && (Sl = Il + 11), 6 == r && (Sl = Dl), 7 == r && (Sl = Il + 7), 8 == r && (Sl = Bl), 9 == r && (Sl = Il + 8), 10 == r && (Sl = Hl + 2), Sl = check(Sl), T.fillStyle = "black", j(l, l == Sl ? "Kỵ tự hóa" : n + pcung[check(Sl - rt + 13)], "black", 12), pp[check(l - rt + 13)][4] = check(Sl - rt + 13), phiky[l] = Sl, f = Sl, T.textAlign = "left";
            var u = new Array,
                k = new Array;
            u[1] = jl + 180 - 200, u[2] = P + 155 - 220, u[3] = E + 155 - 220, u[4] = Rl + 180 - 200, u[5] = ql, u[6] = Gl, u[7] = Ql - 180 + 200, u[8] = tt - 155 + 220, u[9] = w - 155 + 220, u[10] = V - 180 + 220, u[11] = lt, u[12] = $l, k[1] = Jl - 50 + 150, k[2] = Yl + 70, k[3] = Xl + 70, k[4] = Ol + 180 - 40, k[5] = _ + 155 - 40, k[6] = L + 155 - 40, k[7] = zl + 180 - 40, k[8] = et + 70, k[9] = K + 70, k[10] = U - 50 + 150, k[11] = C - 25 + 150, k[12] = Zl - 25 + 150;
            var y = new Array,
                A = new Array;
            if (y[1] = jl + 180 + 17 - 200, y[2] = P + 155 + 17 - 200, y[3] = E + 155 + 17 - 200, y[4] = Rl + 180 + 17 - 200, y[5] = ql, y[6] = Gl, y[7] = Ql - 180 - 17 + 200, y[8] = tt - 155 - 17 + 210, y[9] = w - 155 - 17 + 210, y[10] = V - 180 - 17 + 200, y[11] = lt - 20, y[12] = $l - 20, A[1] = Jl + 150, A[2] = Yl + 110, A[3] = Xl + 110, A[4] = Ol + 180 + 29 - 95, A[5] = _ + 155 + 29 - 95, A[6] = L + 155 + 29 - 95, A[7] = zl + 180 + 29 - 95, A[8] = et + 100, A[9] = K + 270, A[10] = U - 9 + 150, A[11] = C + 25 - 19 + 150, A[12] = Zl + 25 - 19 + 150, 1 == ID_VEPHIEUPHIEU) {
                (T = document.getElementById("myCanvas").getContext("2d")).fillStyle = "#FF9500", T.lineWidth = .4, T.strokeStyle = "#FF9500", T.globalAlpha = .9, T.fillStyle = "#FF9500", l == check(a + 6) && (T.lineWidth = 2), l == a ? (T.strokeStyle = "#FF9500", $(W[l], R[l], 3), T.lineWidth = 1) : ll(.9 * (W[l] - 2) + 60, .9 * (R[l] + 2) + 29, .9 * (W[a] - 2) + 60 + l, .9 * (R[a] + 2) + 28 + l, 600, 330, 25);
                u[a], u[l], u[a], k[a], k[l], k[a];
                T.globalAlpha = .9, T.strokeStyle = "#5D00FF", T.fillStyle = "#5D00FF", l == check(f + 6) ? T.lineWidth = 2 : T.lineWidth = .2, l == f ? (T.strokeStyle = "#5D00FF", $(W[l], R[l], 4)) : ll(W[l] + 2, R[l] + 3, W[f] + 2, R[f], 600, 330, 25), T.globalAlpha = .4, 1 == t && (Sl = Il + 4), 2 == t && (Sl = Il + 11), 3 == t && (Sl = Il + 7), 4 == t && (Sl = Hl + 1), 5 == t && (Sl = Hl + 2), 6 == t && (Sl = Il + 8), 7 == t && (Sl = Il + 9), 8 == t && (Sl = Hl + 3), 9 == t && (Sl = Hl + 5), 10 == t && (Sl = Hl + 10), Sl = check(Sl), T.strokeStyle = "#148AFF", T.globalAlpha = 1, T.fillStyle = "white", T.beginPath(), vetuhoa(y[Sl] - 100, A[Sl] - 70, 5), 1 == t && (Sl = Il + 9), 2 == t && (Sl = Hl + 1), 3 == t && (Sl = Il + 4), 4 == t && (Sl = Hl + 3), 5 == t && (Sl = Il + 11), 6 == t && (Sl = Dl), 7 == t && (Sl = Il + 7), 8 == t && (Sl = Bl), 9 == t && 9 == t && (Sl = Il + 8), 10 == t && (Sl = Hl + 2), Sl = check(Sl), T.beginPath(), T.strokeStyle = "black", T.fillStyle = "white", vetuhoa(y[Sl] - 100, A[Sl] - 70, 5), T.stroke(), T.globalAlpha = 1
            }
        }

        function $(l, t, e) { nl.beginPath(), nl.arc(l, t, 3 * e, 0, 2 * Math.PI, !1), nl.stroke(), nl.beginPath(), nl.arc(l, t, 2 * e, 0, 2 * Math.PI, !1), nl.stroke(), nl.beginPath(), nl.arc(l, t, e, 0, 2 * Math.PI, !1), nl.stroke() }

        function ll(l, t, e, i, n, h, c) {
            c = 5, nl.beginPath(), nl.beginPath(), nl.moveTo(l, t);
            var a = .3 * n + .1 * e + .6 * l,
                f = .5 * h + .1 * i + .4 * t;
            nl.quadraticCurveTo(a, f, e, i), Math.abs(t - i) + Math.abs(l - e) < 250 && (c = 10), Math.abs(t - i) + Math.abs(l - e) > 500 && (c = 15);
            var r = .1;
            Math.abs(t - i) + Math.abs(l - e) > 550 && (r = .07), nl.stroke();
            var T, o = e - .95 * a - .05 * l,
                g = i - .95 * f - .05 * t;
            Math.sqrt(o * o + g * g);
            T = Math.atan2(o, g), nl.lineCap = "round", nl.beginPath(), nl.moveTo(e, i), nl.lineTo(e - c * Math.sin(T + r), i - c * Math.cos(T + r)), nl.lineTo(e - c * Math.sin(T - r), i - c * Math.cos(T - r)), nl.lineWidth = 1, nl.closePath(), nl.stroke(), nl.fill()
        }

        function tl(l, t, e) { nl.font = "   8pt Arial", 1 == l && (Sl = Il + 4), 2 == l && (Sl = Il + 11), 3 == l && (Sl = Il + 7), 4 == l && (Sl = Hl + 1), 5 == l && (Sl = Hl + 2), 6 == l && (Sl = Il + 8), 7 == l && (Sl = Il + 9), 8 == l && (Sl = Hl + 3), 9 == l && (Sl = Hl + 5), 10 == l && (Sl = Hl + 10), nl.fillStyle = "#148AFF", nl.textAlign = "left", nl.strokeStyle = "#148AFF", "Ns.  " == e && (loc = Sl), el(0, Sl, e + "Hóa Lộc ", "#148AFF"), nl.font = "  8pt Arial", 1 == l && (Sl = Il + 9), 2 == l && (Sl = Hl + 1), 3 == l && (Sl = Il + 4), 4 == l && (Sl = Hl + 3), 5 == l && (Sl = Il + 11), 6 == l && (Sl = Dl), 7 == l && (Sl = Il + 7), 8 == l && (Sl = Bl), 9 == l && (Sl = Il + 8), 10 == l && (Sl = Hl + 2), Sl = check(Sl), nl.fillStyle = "black", nl.textAlign = "left", nl.strokeStyle = "black", "Ns.  " == e && (ky = Sl), el(1, Sl, e + "Hóa Kỵ ", "black"), nl.font = " 8pt Arial" }

        function el(l, t, e, i) {
            var n;
            cl = 14;
            return t < 0 && (t += 12), n = check(t), t < 0 && (t += 12), n = check(t), n = check(n), nl.fillStyle = i, 0 == l && x[n] > 7 && (l = 1), 1 == l && v[n] > 7 && x[n] < 8 && (l = 0), 1 == l && v[n] > 7 && x[n] > 7 && (l = 2), 1 == l && v[n] < 8 && (nl.fillText(e, M[n] - 32 - 15, N[n] + cl * v[n] - cl + 50 - 7), Sl = check(n), nl.strokeStyle = "mau", nl.lineWidth = 3, nl.textAlign = "left", nl.font = "  8pt Arial", nl.beginPath(), yinyang(nl, M[Sl] + 30, N[Sl] + cl * v[Sl] - 6 - cl + 50 - 5, 5, 1, 1, i), v[n]++), 0 == l && x[n] < 8 && (nl.fillText(e, M[n] - 32 - 110, N[n] + cl * x[n] - cl + 50 - 7), Sl = check(n), nl.strokeStyle = "mau", nl.lineWidth = 3, nl.textAlign = "left", nl.font = "  8pt Arial", nl.beginPath(), yinyang(nl, M[Sl] + 25 - 90, N[Sl] + cl * x[Sl] - 6 - cl + 50 - 5, 5, 1, 1, i), x[n]++), 0 == id_phieuphieu && 2 == l && (nl.fillText(e, M[n] - 38 + 90, N[n] + cl * (4 + I[n]) - cl + 42), I[n]++), 1 == id_phieuphieu && 2 == l && (1 == I[n] && nl.fillText(e, M[n] - 38 + 90, N[n] + cl * (4 + I[n]) - cl + 42), I[n]++), nl.stroke(), n
        }
    }
    var il = document.getElementById("myCanvas"),
        nl = il.getContext("2d");
    nl.lineWidth = 2.3;
    new Image;
    nl.clearRect(0, 0, il.width, il.height), il.width = 1225 * sizesize * .001 + 5, il.height = 700 * sizesize * .001 + 5, nl.save(), nl.scale(.001 * sizesize, .001 * sizesize);
    var hl = 300,
        cl = 170;
    nl.lineWidth = 1.6, nl.fillStyle = "#F7F7F5", nl.beginPath(), nl.lineWidth = 3, nl.fillStyle = "#F7F7F5", nl.beginPath(), nl.clearRect(0, 0, 1200, 800), nl.closePath(), nl.stroke(), nl.fillStyle = "#F7F7F5", nl.fill(), nl.globalAlpha = 1, nl.fillStyle = "#FFFFFA", nl.lineWidth = 3, nl.strokeStyle = "black", nl.shadowColor = "#999", nl.shadowBlur = 10, nl.shadowOffsetX = 10, nl.shadowOffsetY = 10, roundRect(nl, 2, 2, 1200, 680, 10, 0, 0), nl.fill(), nl.globalAlpha = 1, nl.fillStyle = "#FFFFFA", nl.lineWidth = 3, nl.strokeStyle = "black", nl.shadowColor = "#999", nl.shadowBlur = 0, nl.shadowOffsetX = 0, nl.shadowOffsetY = 0, roundRect(nl, 2, 2, 1200, 680, 10, 1, 1), nl.fill(), nl.stroke(), nl.fillStyle = "#F7F7F5", nl.fill(), nl.lineWidth = 2, nl.strokeStyle = "black", nl.stroke(), nl.lineWidth = 1.3, nl.beginPath(), nl.moveTo(0, cl), nl.lineTo(1202, cl), nl.moveTo(0, cl), nl.lineTo(4 * hl, cl), nl.moveTo(0, 3 * cl), nl.lineTo(1202, 3 * cl), nl.moveTo(0, 2 * cl), nl.lineTo(hl, 2 * cl), nl.moveTo(0, 2 * cl), nl.lineTo(hl, 2 * cl), nl.moveTo(900, 2 * cl), nl.lineTo(1202, 2 * cl), nl.moveTo(hl, 0), nl.lineTo(hl, 4 * cl + 2), nl.moveTo(600, 0), nl.lineTo(600, cl + 2), nl.moveTo(600, 3 * cl), nl.lineTo(600, 4 * cl + 2), nl.moveTo(900, 0), nl.lineTo(900, 4 * cl + 2), nl.stroke(), nl.closePath(), nl.lineWidth = 1.3, nl.strokeStyle = "#000000", nl.stroke(), nl.font = " 8pt Arial", nl.textAlign = "center", nl.fillStyle = "#F0EFEB";
    var al = check(Math.abs(12 + i + 1 - c)),
        fl = check(i + c - 1),
        rl = al;
    for (nl.font = " 8pt Arial", O = 1; O <= 12; O++) rl > 12 && (rl = 1), rl == fl && (F[O] = F[O] + "-THÂN"), nl.fillStyle = "#F7F7F5", nl.textAlign = "center", 1 == O || 9 == O || 5 == O || 4 == O || 3 == O || 8 == O ? (nl.fillStyle = "#0004FF", nl.fillText(F[O], M[rl], N[rl] - 1)) : (nl.fillStyle = "black", nl.fillText(F[O], M[rl], N[rl] - 1)), rl++;
    for (nl.lineWidth = 5, nl.strokeStyle = "#F0F2E4", nl.closePath(), nl.globalAlpha = .2, nl.beginPath(), nl.lineWidth = 1.3, nl.globalAlpha = 1, O = 1; O <= 12; O++) nl.beginPath(), nl.strokeStyle = "black", nl.moveTo(M[O] - 36, N[O] + 150), nl.lineWidth = .2, nl.lineTo(M[O] - 36, N[O] - 20), nl.beginPath(), nl.strokeStyle = "black", nl.moveTo(M[O] - 150, N[O] + 40), nl.lineWidth = .2, nl.lineTo(M[O] - 36, N[O] + 40), nl.beginPath(), nl.strokeStyle = "black", nl.moveTo(M[O] - 150, N[O] + 95), nl.lineWidth = .2, nl.lineTo(M[O] - 36, N[O] + 95), nl.beginPath(), nl.strokeStyle = "black", nl.moveTo(M[O] - 150, N[O] + 115), nl.lineWidth = .2, nl.lineTo(M[O] - 36, N[O] + 115), nl.strokeStyle = "black", nl.moveTo(M[O] - 92, N[O] + 150), nl.lineWidth = .2, nl.lineTo(M[O] - 92, N[O] + 115);
    if (nl.globalAlpha = .1, yinyang(nl, 600, 340, 300, 1, 1, "grey"), nl.globalAlpha = 1, nl.font = "  8pt Arial", nl.textAlign = "left", nl.fillStyle = "black", nl.fillText("Ngày: ", 330, 240 + 2 * l), 1 == nhuan ? nl.fillText("Tháng Nhuận:", 330, 240 + l) : nl.fillText("Tháng:", 330, 240 + 1 * l), nl.fillText("Năm: ", 330, 240), nl.fillText("Giờ: ", 330, 240 + 3 * l), nl.fillText("Thai Nguyên: ", 330, 240 + 4 * l), nl.fillText("Mệnh: ", 330, 240 + 6 * l), 0 != id_vdttl && nl.fillText("An tứ hóa theo Khâm Thiên Môn", 330, 240 + 5 * l), nl.fillText("Năm xem: ", 330, 240 + 10 * l), nl.fillText("Cục: ", 330, 240 + 7 * l), nl.fillText("Chủ Mệnh: ", 660, 240 + 6 * l), nl.fillText("Chủ Thân: ", 660, 240 + 7 * l), nl.textAlign = "left", nl.fillStyle = "#00008B", Tl = r, g(rl = a), nl.fillText(can[a], 660, 240 + 10 * l), h(Tl), nl.fillText(chi[r], 710, 240 + 10 * l), nl.font = "  8pt Arial", f(rl, Tl), nl.fillText(nh[rl][Tl], 770, 240 + 10 * l), nl.fillText(m, 500, 240 + 10 * l), f(rl, Tl), namdl == nam ? nl.fillText(namxemdl - nam + 1 + " tuổi âm", 560, 240 + 10 * l) : nl.fillText(namxemdl - nam + 1 + " tuổi", 560, 240 + 10 * l), nl.fillStyle = "#00008B", nl.fillText(namxemdl, 420, 240 + 10 * l), 1 == id_luunguyet && (nl.font = "  8pt Arial", nl.textAlign = "left", nl.fillStyle = "#00008B", 1 == ID_LUUNHAT)) {
        nl.fillText(ngayxemdl, 420, 240 + 12 * l);
        var Tl = k;
        g(rl = u), nl.fillText(can[u], 660, 240 + 12 * l), h(Tl), nl.fillText(chi[k], 710, 240 + 12 * l), nl.fillStyle = "black", nl.fillText("Ngày xem", 330, 240 + 12 * l), nl.fillStyle = "#00008B";
        rl = u, Tl = k;
        if (nl.font = "  8pt Arial", f(rl, Tl), nl.fillText(p, 500, 240 + 12 * l), nl.fillText(B[thu], 560, 240 + 12 * l), 1 == ID_LUUTHOI) {
            nl.fillStyle = "black", nl.fillText("Giờ xem", 330, 240 + 13 * l), nl.fillStyle = "#00008B", 1 !== A ? nl.fillText(gioxem + " h", 420, 240 + 13 * l) : nl.fillText("23-1", 420, 240 + 13 * l);
            rl = y, Tl = A;
            nl.font = "  8pt Arial", f(rl, Tl), nl.fillText("giờ xem", 500, 240 + 13 * l), g(rl), nl.fillText(can[y], 660, 240 + 13 * l), h(Tl), nl.fillText(chi[A], 710, 240 + 13 * l)
        }
    }
    if (1 == document.getElementById("ID_LICH").value) {
        rl = cangio, Tl = c;
        nl.font = "  8pt Arial", f(rl, Tl), nl.fillText(nh[rl][Tl], 770, 240 + 3 * l), g(rl), nl.fillText(can[cangio], 660, 240 + 3 * l), h(Tl), nl.fillText(chi[c], 710, 240 + 3 * l)
    }
    if (1 == document.getElementById("ID_LICH").value && (g(canngay), nl.fillText(can[canngay], 660, 240 + 2 * l), h(chingay), nl.fillText(chi[chingay], 710, 240 + 2 * l)), 1 == document.getElementById("ID_LICH").value) {
        nl.fillStyle = "#00008B", 23 == giodl && nl.fillText("đã sang ngày mới", 546, 240 + 2 * l), nl.fillText(ngaydl, 420, 240 + 2 * l);
        rl = canngay, Tl = chingay;
        nl.font = "  8pt Arial", f(rl, Tl), nl.fillText(nh[rl][Tl], 770, 240 + 2 * l), nl.fillText(n, 500, 240 + 2 * l)
    } else {
        rl = canngay, Tl = chingay;
        f(rl, Tl), nl.fillText(n, 500, 240 + 2 * l)
    }
    canthang = checkcan(2 * t + i), f(rl, Tl);
    rl = canthang, Tl = chithang;
    g(rl), nl.fillText(can[rl], 660, 240 + 1 * l), h(Tl), nl.fillText(chi[Tl], 710, 240 + 1 * l), nl.font = "  8pt Arial", nl.textAlign = "left", nl.fillStyle = "black";
    rl = checkcan(canthang - 9), Tl = check(chithang - 9);
    if (g(rl), nl.fillText(can[rl], 660, 240 + 4 * l), h(Tl), nl.fillText(chi[Tl], 710, 240 + 4 * l), nl.font = "  8pt Arial", f(rl, Tl), nl.fillText(nh[rl][Tl], 770, 240 + 4 * l), 1 == nhuan)
        if (1 == document.getElementById("ID_LICH").value) {
            nl.fillStyle = "#00008B", nl.fillText(thangdl, 420, 240 + 1 * l);
            rl = canthang, Tl = chithang;
            f(rl, Tl), nl.fillText(i, 500, 240 + 1 * l)
        } else {
            rl = canthang;
            nl.font = "  8pt Arial";
            Tl = chithang;
            f(rl, Tl), nl.fillText(nh[rl][Tl], 770, 240 + 1 * l), nl.fillText(i, 500, 240 + 1 * l)
        }
    else if (1 == document.getElementById("ID_LICH").value) {
        nl.fillStyle = "#00008B", nl.fillText(thangdl, 420, 240 + 1 * l);
        rl = canthang, Tl = chithang;
        f(rl, Tl), nl.fillText(i, 500, 240 + 1 * l)
    } else {
        rl = canthang, Tl = chithang;
        f(rl, Tl), nl.fillText(i, 500, 240 + 1 * l)
    }
    Tl = e;
    if (g(rl = t), nl.fillText(can[t], 660, 240), h(Tl), nl.fillText(chi[e], 710, 240), 1 == document.getElementById("ID_LICH").value) { nl.fillStyle = "#00008B", nl.fillText(namdl, 420, 240), f(rl = t, Tl = e), nl.font = "  8pt Arial", nl.fillText(nh[rl][Tl], 770, 240), nl.fillText(nam, 500, 240) } else {
        rl = t;
        nl.font = "  8pt Arial", f(rl, Tl = e), nl.fillText(nh[rl][Tl], 770, 240), nl.fillText(nam + " (âm)", 500, 240)
    }
    if (1 == document.getElementById("ID_LICH").value ? phutdl < 10 ? nl.fillText(giodl + ":0" + phutdl, 420, 240 + 3 * l) : nl.fillText(giodl + ":" + phutdl, 420, 240 + 3 * l) : (h(c), nl.fillText(chi[c], 500, 240 + 3 * l)), 1 == document.getElementById("ID_LICH").value) {
        rl = cangio, Tl = c;
        nl.font = "  8pt Arial", f(rl, Tl), nl.fillText("giờ âm", 500, 240 + 3 * l)
    }
    var ol = check(e + 10);
    0 == ol && (ol = 12), 11 == ol && nl.fillText("Tham Lang", 750, 240 + 6 * l), 12 != ol && 10 != ol || nl.fillText("Cự Môn", 750, 240 + 6 * l), 1 != ol && 9 != ol || nl.fillText("Lộc Tồn", 750, 240 + 6 * l), 2 != ol && 8 != ol || nl.fillText("Văn Khúc", 750, 240 + 6 * l), 3 != ol && 7 != ol || nl.fillText("Liêm Trinh", 750, 240 + 6 * l), 4 != ol && 6 != ol || nl.fillText("Vũ Khúc", 750, 240 + 6 * l), 5 == ol && nl.fillText("Phá Quân", 750, 240 + 6 * l), e - 2 == -1 && nl.fillText("Linh Tinh", 750, 240 + 7 * l), e - 2 != 0 && e - 2 != 6 || nl.fillText("Thiên Tướng", 750, 240 + 7 * l), e - 2 != 1 && e - 2 != 7 || nl.fillText("Thiên Lương", 750, 240 + 7 * l), e - 2 != 2 && e - 2 != 8 || nl.fillText("Thiên Đồng", 750, 240 + 7 * l), e - 2 != 3 && e - 2 != 9 || nl.fillText("Văn Xương", 750, 240 + 7 * l), e - 2 != 4 && e - 2 != 10 || nl.fillText("Thiên Cơ", 750, 240 + 7 * l), e - 2 == 5 && nl.fillText("Hỏa Tinh", 750, 240 + 7 * l);
    T = checkcan(2 * a + d);
    for (0 == (o = check(d + 2)) && (o = 12), 1 == id_luunguyet && (nl.textAlign = "left", nl.fillStyle = "black", nl.fillText("Tháng xem", 330, 240 + 11 * l), nl.textAlign = "left", nl.fillStyle = "#00008B", nl.font = "  8pt Arial", nl.fillText(thangxemdl, 420, 240 + 11 * l), nl.font = "  8pt Arial", f(rl = T, Tl = o), 1 == xemnhuan ? nl.fillText(d + " nhuận", 500, 240 + 11 * l) : nl.fillText(d, 500, 240 + 11 * l), g(rl), nl.fillText(can[T], 660, 240 + 11 * l), h(Tl), nl.fillText(chi[o], 710, 240 + 11 * l)), nl.textAlign = "left", nl.fillStyle = "blue", nl.textAlign = "left", nl.fillStyle = "#00008B", nl.font = "1 8pt", f(t, e), nl.font = "  8pt Arial", nl.fillText(nh[t][e], 420, 240 + 6 * l), nl.font = " 8pt", yl = checkcan(2 * t + 1), rl = yl, O = 1; O <= 12; O++) {
        rl = checkcan(rl);
        Tl = check(O + 2);
        f(rl, Tl), nl.font = "  8pt  Arial", nl.textAlign = "left";
        S[rl], s[Tl], parseInt(S[rl]), parseInt(s[Tl]);
        nl.fillText(H[rl] + " " + chi[Tl], M[O] - 145, N[O]), rl++
    }
    nl.textAlign = "left", nl.font = " 8pt Arial", nl.fillStyle = "purple";
    var gl, ul = tennguoi,
        kl = al;
    0 == (gl = parseInt(document.getElementById("ID_DIABAN").value)) && (kl = al), 1 == gl ? (kl = al !== fl ? fl : t % 2 != 0 && 1 == gioitinh || t % 2 == 0 && 0 == gioitinh ? fl + 2 : fl - 2, nl.font = " 12pt Arial", nl.textAlign = "right", ul += "- Lá Số Địa Bàn") : 2 == gl && (kl = check(al + 2), nl.font = " 12pt Arial", nl.textAlign = "center", ul += "- Lá Số Nhân Bàn");
    var yl = checkcan(2 * t + 1),
        Al = yl,
        pl = (yl = checkcan(yl + kl - 1), check(kl + 2));
    cuc = timcuc(yl, pl), nl.font = "  8pt Arial", nl.textAlign = "left", nl.fillStyle = "black", nl.fillText(hanh[cuc], 420, 240 + 7 * l), nl.textAlign = "right", nl.font = "  8pt Arial", rl = al;
    var dl, ml;
    Tl = cuc;
    nl.textAlign = "left", nl.fillStyle = "black", nl.font = " 8pt Arial";
    var xl = 1;
    if (t % 2 != 0 && 1 == gioitinh || t % 2 == 0 && 0 == gioitinh)
        for (O = 0; O < 12; O++) {
            ml = Tl - 1 + 10 * (O + 1);
            var vl = (dl = Tl + 10 * O) + 9;
            rl > 12 && (rl = 1), nl.fillText(dl + "-" + vl, M[rl] - 100, N[rl]), rl++
        } else
            for (xl = -1, O = 0; O < 12; O++) {
                ml = Tl - 1 + 10 * (O + 1);
                vl = (dl = Tl + 10 * O) + 9;
                rl > 12 && (rl = 1), nl.fillText(dl + "-" + vl, M[rl] - 100, N[rl]), rl = check(rl + 11)
            }

    function Il(l) {
        var t = l - n % l;
        n % l == 0 && (t = 0);
        var e, i = (n + t) / l;
        return t % 2 == 0 && (e = i + t), t % 2 != 0 && (e = i - t), e > 12 && (e -= 12), e < 1 && (e = check(e + 12)), e
    }
    for (kt = Il(cuc), O = 0; O < 13; O++) x[O] = 0;
    nl.font = "bold 11pt Arial", nl.textAlign = "center";
    var Il = kt;
    sl = " ", 0 == kt && (kt = 12), nl.fillStyle = "#F9AA07";
    nl.fillText(b[1] + " (" + [" ", "M", "V", "B", "V", "M", "M", "V", "B", "N", "V", "B", "M"][kt] + ")", M[kt], N[kt] + 15), x[kt] = 1, Al = kt + 4, kt = check(Al), nl.fillStyle = "#F20D2E";
    nl.fillText(b[2] + " (" + [" ", "M", "N", "V", "H", "B", "M", "M", "B", "V", "H", "B", "V"][kt] + ")", M[kt], N[kt] + 15), x[kt] = 1, Al = kt + 3, kt = check(Al), nl.fillStyle = "#030401", 11 == kt && (sl = "V"), 12 == kt && (sl = "H"), 1 == kt && (sl = "N"), 2 == kt && (sl = "M"), 3 == kt && (sl = "B"), 4 == kt && (sl = "M"), 5 == kt && (sl = "H"), 6 == kt && (sl = "H"), 7 == kt && (sl = "V"), 8 == kt && (sl = "B"), 9 == kt && (sl = "B"), 10 == kt && (sl = "M"), nl.fillText(b[3] + " (" + sl + ")", M[kt], N[kt] + 15), x[kt] = 1, Al = kt + 1, kt = check(Al), nl.fillStyle = "purple", 11 == kt && (sl = "V"), 12 == kt && (sl = "M"), 1 == kt && (sl = "N"), 2 == kt && (sl = "H"), 3 == kt && (sl = "M"), 4 == kt && (sl = "B"), 5 == kt && (sl = "V"), 6 == kt && (sl = "M"), 7 == kt && (sl = "B"), 8 == kt && (sl = "V"), 9 == kt && (sl = "M"), 10 == kt && (sl = "B"), nl.fillText(b[4] + " (" + sl + ")", M[kt], N[kt] + 15), x[kt] = 1, Al = kt + 1, kt = check(Al), nl.fillStyle = "#F20D2E", 11 == kt && (sl = "H"), 12 == kt && (sl = "H"), 1 == kt && (sl = "V"), 2 == kt && (sl = "M"), 3 == kt && (sl = "V"), 4 == kt && (sl = "V"), 5 == kt && (sl = "M"), 6 == kt && (sl = "B"), 7 == kt && (sl = "N"), 8 == kt && (sl = "N"), 9 == kt && (sl = "H"), 10 == kt && (sl = "H"), nl.fillText(b[5] + " (" + sl + ")", M[kt], N[kt] + 15), x[kt] = 1, Al = kt + 2, kt = check(Al), nl.fillStyle = "#228B22", 11 == kt && (sl = "M"), 12 == kt && (sl = "H"), 1 == kt && (sl = "V"), 2 == kt && (sl = "V"), 3 == kt && (sl = "M"), 4 == kt && (sl = "B"), 5 == kt && (sl = "M"), 6 == kt && (sl = "H"), 7 == kt && (sl = "B"), 8 == kt && (sl = "V"), 9 == kt && (sl = "M"), 10 == kt && (sl = "B"), nl.fillText(b[6] + " (" + sl + ")", M[kt], N[kt] + 15), x[kt] = 1;
    var Hl = check(14 - Il);
    for (Al = kt = Hl, kt = check(Al), cl = 15, 0 == x[kt] && (cl = 0), nl.fillStyle = "#F9AA07", 11 == kt && (sl = "M"), 12 == kt && (sl = "M"), 1 == kt && (sl = "M"), 2 == kt && (sl = "B"), 3 == kt && (sl = "M"), 4 == kt && (sl = "B"), 5 == kt && (sl = "V"), 6 == kt && (sl = "M"), 7 == kt && (sl = "B"), 8 == kt && (sl = "B"), 9 == kt && (sl = "M"), 10 == kt && (sl = "V"), nl.fillText(b[7] + " (" + sl + ")", M[kt], N[kt] + 15 + cl), Al = kt + 1, kt = check(Al), cl = 15, 0 == x[kt] && (cl = 0), nl.fillStyle = "#000000", 11 == kt && (sl = "M"), 12 == kt && (sl = "M"), 1 == kt && (sl = "N"), 2 == kt && (sl = "H"), 3 == kt && (sl = "N"), 4 == kt && (sl = "H"), 5 == kt && (sl = "H"), 6 == kt && (sl = "B"), 7 == kt && (sl = "B"), 8 == kt && (sl = "V"), 9 == kt && (sl = "V"), 10 == kt && (sl = "M"), nl.fillText(b[8] + " (" + sl + ")", M[kt], N[kt] + 15 + cl), Al = kt + 1, kt = check(Al), cl = 15, 0 == x[kt] && (cl = 0), nl.fillStyle = "#228B22", 11 == kt && (sl = "V"), 12 == kt && (sl = "M"), 1 == kt && (sl = "B"), 2 == kt && (sl = "B"), 3 == kt && (sl = "M"), 4 == kt && (sl = "H"), 5 == kt && (sl = "V"), 6 == kt && (sl = "M"), 7 == kt && (sl = "B"), 8 == kt && (sl = "B"), 9 == kt && (sl = "M"), 10 == kt && (sl = "H"), nl.fillText(b[9] + " (" + sl + ")", M[kt], N[kt] + 15 + cl), Al = kt + 1, kt = check(Al), cl = 15, 0 == x[kt] && (cl = 0), nl.fillStyle = "#000000", 11 == kt && (sl = "V"), 12 == kt && (sl = "H"), 1 == kt && (sl = "M"), 2 == kt && (sl = "M"), 3 == kt && (sl = "B"), 4 == kt && (sl = "B"), 5 == kt && (sl = "V"), 6 == kt && (sl = "H"), 7 == kt && (sl = "M"), 8 == kt && (sl = "M"), 9 == kt && (sl = "H"), 10 == kt && (sl = "V"), nl.fillText(b[10] + " (" + sl + ")", M[kt], N[kt] + 15 + cl), Al = kt + 1, kt = check(Al), cl = 15, 0 == x[kt] && (cl = 0), nl.fillStyle = "#000000", 11 == kt && (sl = "M"), 12 == kt && (sl = "M"), 1 == kt && (sl = "M"), 2 == kt && (sl = "H"), 3 == kt && (sl = "V"), 4 == kt && (sl = "B"), 5 == kt && (sl = "V"), 6 == kt && (sl = "N"), 7 == kt && (sl = "M"), 8 == kt && (sl = "H"), 9 == kt && (sl = "N"), 10 == kt && (sl = "B"), nl.fillText(b[11] + " (" + sl + ")", M[kt], N[kt] + 15 + cl), Al = kt + 1, kt = check(Al), cl = 15, 0 == x[kt] && (cl = 0), nl.fillStyle = "#F9AA07", 11 == kt && (sl = "M"), 12 == kt && (sl = "V"), 1 == kt && (sl = "M"), 2 == kt && (sl = "M"), 3 == kt && (sl = "V"), 4 == kt && (sl = "H"), 5 == kt && (sl = "M"), 6 == kt && (sl = "V"), 7 == kt && (sl = "H"), 8 == kt && (sl = "B"), 9 == kt && (sl = "V"), 10 == kt && (sl = "H"), nl.fillText(b[12] + " (" + sl + ")", M[kt], N[kt] + 15 + cl), Al = kt + 1, kt = check(Al), cl = 15, 0 == x[kt] && (cl = 0), nl.fillStyle = "purple", 11 == kt && (sl = "V"), 12 == kt && (sl = "M"), 1 == kt && (sl = "M"), 2 == kt && (sl = "H"), 3 == kt && (sl = "V"), 4 == kt && (sl = "B"), 5 == kt && (sl = "V"), 6 == kt && (sl = "V"), 7 == kt && (sl = "M"), 8 == kt && (sl = "N"), 9 == kt && (sl = "M"), 10 == kt && (sl = "B"), nl.fillText(b[13] + " (" + sl + ")", M[kt], N[kt] + 15 + cl), Al = kt + 4, kt = check(Al), cl = 15, 0 == x[kt] && (cl = 0), nl.fillStyle = "#030401", 11 == kt && (sl = "M"), 12 == kt && (sl = "V"), 1 == kt && (sl = "H"), 2 == kt && (sl = "V"), 3 == kt && (sl = "V"), 4 == kt && (sl = "N"), 5 == kt && (sl = "M"), 6 == kt && (sl = "M"), 7 == kt && (sl = "H"), 8 == kt && (sl = "H"), 9 == kt && (sl = "V"), 10 == kt && (sl = "B"), nl.fillText(b[14] + " (" + sl + ")", M[kt], N[kt] + 15 + cl), O = 0; O < 13; O++) x[O] = 1;
    cl = 10, nl.font = "bold 8pt Arial";
    var Sl, sl, bl, Bl = 22 - c,
        Dl = c + 2;
    if (Sl = check(Bl), Bl = Sl, 4 != Sl && 8 != Sl && 12 != Sl || (sl = " (M)"), 7 != Sl && 11 != Sl && 3 != Sl || (sl = " (Đ)"), 10 != Sl && 6 != Sl && 2 != Sl || (sl = " (Đ)"), 1 != Sl && 5 != Sl && 9 != Sl || (sl = " (H)"), nl.fillStyle = "purple", nl.textAlign = "left", nl.font = "bold 8pt Arial", 3 != Sl && 8 != Sl && 12 != Sl || (sl = " (M)"), 7 != Sl && 11 != Sl && 3 != Sl || (sl = " (Đ)"), 10 != Sl && 6 != Sl && 2 != Sl || (sl = " (V)"), 1 != Sl && 5 != Sl && 9 != Sl || (sl = " (H)"), Sl = check(Dl), Dl = Sl, nl.fillStyle = "#030401", nl.textAlign = "left", nl.font = " bold 8pt Arial", nl.fillStyle = "#030401", nl.textAlign = "center", 2 == cuc && (Sl = 7), 3 == cuc && (Sl = 10), 4 == cuc && (Sl = 4), 5 == cuc && (Sl = 7), 6 == cuc && (Sl = 1), nl.font = "  8pt Arial", t % 2 != 0 && 1 == gioitinh || t % 2 == 0 && 0 == gioitinh)
        for (O = 1; O <= 12; O++) Sl = check(Sl), nl.fillText(ts[O], M[Sl], N[Sl] + 141), Sl++;
    else
        for (O = 1; O <= 12; O++) Sl = check(Sl), nl.fillText(ts[O], M[check(Sl + 12)], N[check(Sl + 12)] + 141), Sl += 11;
    nl.textAlign = "left",
        function() {
            var l, h, a, f, r, T, o, g;
            nl.font = " 8pt Arial", nl.font = " 8pt Arial", X(t, ""), h = t, a = "", o = [0, 1, 2, 4, 5, 4, 5, 7, 8, 10, 11], f = check(o[h] + 1), r = check(o[h] + 11), nl.font = " 8pt Arial", q(0, o[h], a + "LỘC TỒN. ", "#F9AA07"), nl.font = " 8pt Arial", T = r % 3 == 0 ? " (M)" : " (H)", q(1, f, a + "KÌNH D. " + (f % 3 == 0 ? " (M)" : " (H)"), "purple"), nl.font = "  8pt Arial", q(1, r, a + "ĐÀ LA " + T, "purple");
            var u, k, y = 22 - c,
                A = c + 2;
            y = g = check(y), 4 != g && 8 != g && 12 != g || (H = " (M)"), 7 != g && 11 != g && 3 != g || (H = " (Đ)"), 10 != g && 6 != g && 2 != g || (H = " (Đ)"), 1 != g && 5 != g && 9 != g || (H = " (H)"), nl.fillStyle = "purple", nl.textAlign = "left", nl.font = " 8pt Arial", q(0, g, "V. XƯƠNG " + H), 3 != g && 8 != g && 12 != g || (H = " (M)"), 7 != g && 11 != g && 3 != g || (H = " (Đ)"), 10 != g && 6 != g && 2 != g || (H = " (V)"), 1 != g && 5 != g && 9 != g || (H = " (H)"), A = g = check(A), nl.fillStyle = "#030401", nl.textAlign = "left", nl.font = " 8pt Arial", q(0, g, "V. KHÚC. " + H), k = check(check(10 + c - 1)), H = 1 == (u = check(23 - c)) || 7 == u ? " (Đ)" : 4 == u || 10 == u ? " (M)" : " (H)", nl.font = " 8pt Arial", q(1, u, "ĐỊA KHÔNG " + H, "#F20D2E"), nl.font = " 8pt Arial", q(1, k, "ĐỊA KIẾP " + H, "#F20D2E");
            var p, d, m, x, v = 2 + i,
                I = 22 - i;
            3 != (g = check(v)) && 10 != g || (H = " (M)"), 6 != g && 12 != g || (H = " (V)"), 1 != g && 2 != g && 4 != g && 5 != g && 7 != g && 8 != g && 9 != g && 11 != g || (H = " (H)"), nl.fillStyle = "#F9AA07", nl.textAlign = "left", nl.font = " 8pt Arial", q(0, g, "TẢ PHÙ. " + H, "#F9AA07"), g = check(I), nl.font = " 8pt Arial", q(0, g, "HỮU BẬT. " + H, "#F9AA07"), nl.font = " 8pt Arial", 3 == e || 7 == e || 11 == e ? (m = 12, x = 2) : 4 == e || 8 == e || 12 == e ? (m = 8, x = 9) : 5 == e || 9 == e || 1 == e ? (m = 1, x = 9) : 6 != e && 10 != e && 2 != e || (m = 2, x = 9);
            var H, S = 1;
            if (t % 2 != 0 && 0 == gioitinh && (S = -1), t % 2 != 1 && 1 == gioitinh && (S = -1), 0 == id_vdttlhl ? (p = check(m + c - 1), d = check(x + c - 1)) : (p = check(m + S * (c - 1) + 12), d = check(x - S * (c - 1) + 12)), nl.font = " 8pt Arial", 1 != p && 5 != p && 9 != p || (H = " (M)"), 4 != p && 8 != p && 12 != p || (H = " (Đ)"), 2 != p && 6 != p && 10 != p || (H = " (B)"), 3 != p && 7 != p && 11 != p || (H = " (H)"), q(1, p, "HỎA TINH " + H, "#F20D2E"), nl.font = " 8pt Arial", H = " (H)", 1 != d && 5 != d && 9 != d || (H = " (M)"), 4 != d && 8 != d && 12 != d || (H = " (Đ)"), 2 != d && 6 != d && 10 != d || (H = " (B)"), 3 != d && 7 != d && 11 != d || (H = " (H)"), q(1, d, "LINH TINH " + H, "#F20D2E"), nl.font = "  8pt Arial", 1 == id_thaitue && function(l, t) { var e; for (nl.font = "  8pt Arial", rl = l + 10, O = 1; O <= 12; O++) rl = check(rl), 1 == O && (e = "#148AFF", nl.font = "  8pt Arial"), 2 == O && (e = "red"), 11 == O && (e = "red"), 5 == O && (e = "red"), 9 == O && (e = "purple"), 3 == O && (e = "#228B22"), Y(rl, t + tue[O], e, 10), nl.font = "  8pt Arial", rl++ }(e, ""), 1 == id_thaitue && function() {
                    nl.font = "  8pt Arial";
                    var e = new Array;
                    e[1] = "Bác Sĩ", e[2] = "Lực Sĩ", e[3] = "Thanh Long", e[4] = "Tiểu Hao", e[5] = "Tướng Quân", e[6] = "Tấu Thư", e[7] = "Phi Liêm", e[8] = "Hỉ Thần", e[9] = "Bệnh Phù", e[10] = "Đại Hao ", e[11] = "Phục Binh", e[12] = "Quan Phủ";
                    var i = new Array;
                    for (O = 1; O <= 12; O++) i[O] = "#030401";
                    if (i[1] = "black", i[2] = "red", i[3] = "#228B22", i[4] = "red", i[10] = "red", i[5] = "#228B22", i[6] = "#F20D2E", i[7] = "red", i[8] = "red", i[10] = "red", i[11] = "red", 1 == t ? l = 1 : 2 == t ? l = 2 : 3 == t ? l = 4 : 4 == t ? l = 5 : 5 == t ? l = 4 : 6 == t ? l = 5 : 7 == t ? l = 7 : 8 == t ? l = 8 : 9 == t ? l = 10 : 10 == t && (l = 11), t % 2 != 0 && 1 == gioitinh || t % 2 == 0 && 0 == gioitinh)
                        for (O = 1; O <= 12; O++) Y(check(l + O - 1), e[O], i[O], 9);
                    else
                        for (O = 1; O <= 12; O++) Y(check(l + 1 - O), e[O], i[O], 9)
                }(), 1 == id_tapdieu) {
                for (1 == id_tuongtinh && function() {
                        var l, t = new Array;
                        t[1] = "Tướng Tinh", t[2] = "Phan An", t[3] = "Thiên Mã ", t[4] = "Tức Thần", t[5] = "Hoa Cái ", t[6] = "Kiếp Sát ", t[7] = "Tai Sát", t[8] = "Thiên Sát", t[9] = "Chỉ Bối", t[10] = "Đào Hoa ", t[11] = "Nguyệt Sát", t[12] = "Vong Thần";
                        var i = new Array;
                        for (O = 1; O <= 12; O++) i[O] = "#030401";
                        for (i[10] = "#000000", i[3] = "red", i[6] = "red", i[5] = "black", 3 == e || 7 == e || 11 == e ? l = 5 : 4 == e || 8 == e || 12 == e ? l = 2 : 5 == e || 9 == e || 1 == e ? l = 11 : 6 != e && 10 != e && 2 != e || (l = 8), rl = l, O = 1; O <= 12; O++) rl = check(rl), nl.font = "  8pt Arial", Y(rl, t[O], i[O], 11), rl++
                    }(), O = 1; O < 13; O++) nl.font = "  8pt Arial";
                var s, b, B, D;
                if (1 == id_tapdieu) 1 == t ? (s = 6, b = 8) : 2 == t ? (s = 3, b = 7) : 3 == t ? (s = 4, b = 11) : 4 == t ? (s = 1, b = 10) : 5 == t ? (s = 2, b = 2) : 6 == t ? (s = 9, b = 1) : 7 == t ? (s = 10, b = 5) : 8 == t ? (s = 7, b = 4) : 9 == t ? (s = 9, b = 5) : 10 == t && (s = 5, b = 4), g = s, nl.fillStyle = "#F9AA07", nl.textAlign = "left", q(0, g, "Thiên quan ", "#F9AA07"), g = b, nl.fillStyle = "#F9AA07", nl.textAlign = "left", q(0, g, "Thiên phúc ", "#F9AA07"), 1 == t || 3 == t ? B = 4 : 2 == t || 4 == t ? B = 5 : 5 == t ? B = 7 : 6 == t ? B = 8 : 7 == t ? B = 10 : 8 == t ? B = 11 : 9 == t ? B = 1 : 10 == t && (B = 2), q(0, B, "Thiên Trù", "#228B22"), nl.font = "  8pt Arial", 1 == t ? D = 1 : 2 == t ? D = 2 : 3 == t ? D = 4 : 4 == t ? D = 5 : 5 == t ? D = 4 : 6 == t ? D = 5 : 7 == t ? D = 7 : 8 == t ? D = 8 : 9 == t ? D = 10 : 10 == t && (D = 11), q(0, check(D + 3), "LN. Văn Tinh", "purple"), q(0, check(D + 8), "Quốc Ấn", "purple"), q(0, check(D + 5), "Đường Phù", "purple"), q(1, ["", 8, 9, 6, 7, 4, 5, 2, 3, 10, 1][t], "Lưu Hà", "black");
                var M = e - 2 + 1;
                nl.font = "  8pt Arial", q(1, M, "Thiên Không ", "#F20D2E");
                var N = 18 - e;
                q(1, 4 + e, "Thiên Hư ", "#F20D2E"), q(1, N, "Thiên Khốc ", "#F20D2E");
                var F, _, L = 15 - e,
                    E = L + 6;
                q(0, L, "Hồng Loan ", "black"), q(0, E, "Thiên Hỉ ", "black"), 3 == e || 4 == e || 5 == e ? (F = 4, _ = 12) : 6 == e || 7 == e || 8 == e ? (F = 7, _ = 3) : 9 == e || 10 == e || 11 == e ? (F = 10, _ = 6) : 12 != e && 1 != e && 2 != e || (F = 1, _ = 9), q(1, F, "Cô Thần ", "#F20D2E"), q(1, _, "Quả Tú ", "#F20D2E");
                var P, C = 22 - e;
                q(0, 2 + e, "Long Trì ", "black"), q(0, C, "Phượng Các ", "#F9AA07"), q(0, C, "Niên Giải", "black"), 3 == e || 6 == e || 9 == e || 12 == e ? P = 8 : 1 == e || 4 == e || 7 == e || 10 == e ? P = 4 : 2 != e && 5 != e && 8 != e && 11 != e || (P = 12), q(1, P, "Phá Toái", "purple")
            }
            if (1 == id_tapdieu) {
                nl.font = "  8pt Arial";
                var V = A + 10;
                q(0, A + 2, "Đài Phụ ", "#F9AA07"), q(0, V, "Phong Cáo ", "#228B22");
                var U, w, K, W, R, G, Q, z = check(12 + i - 1),
                    j = check(8 + i - 1);
                q(1, j, "Thiên Hình ", "#F20D2E"), q(0, check(j + 11), "Thiên Giải ", "#F20D2E"), q(0, check(j + 10), "Địa Giải ", "#F20D2E"), q(1, z, "Thiên Diêu ", "#030401"), 1 == i || 2 == i ? U = 7 : 3 == i || 4 == i ? U = 9 : 5 == i || 6 == i ? U = 11 : 7 == i || 8 == i ? U = 1 : 9 == i || 10 == i ? U = 3 : 11 != i && 12 != i || (U = 5), 1 == i || 5 == i || 9 == i ? w = 4 : 2 == i || 6 == i || 10 == i ? w = 7 : 3 == i || 7 == i || 11 == i ? w = 1 : 4 != i && 8 != i && 12 != i || (w = 10), nl.font = "  8pt Arial", q(0, U, "Nguyệt Giải", "#228B22"), nl.font = "  8pt Arial", q(0, w, "Thiên Vu", "#228B22"), q(0, [0, 9, 4, 3, 1, 6, 2, 10, 6, 1, 5, 9, 1][i], "Thiên Nguyệt", "#228B22"), 1 == i || 7 == i ? K = 1 : 2 == i || 8 == i ? K = 11 : 3 == i || 9 == i ? K = 9 : 4 == i || 10 == i ? K = 7 : 5 == i || 11 == i ? K = 5 : 6 != i && 12 != i || (K = 3), q(1, K, "Âm Sát", "#030401"), t % 2 != 0 && 1 == gioitinh || t % 2 == 0 && 0 == gioitinh ? (W = check(al + 5), R = check(al + 7)) : (W = check(al + 7), R = check(al + 5)), q(1, W, "Thiên Thương", "red"), q(1, R, "Thiên Sứ", "red");
                var J = n % 12;
                0 == J && (J = 12), G = check(v + J - 1), Q = check(check(I) + 12 + 1 - J), Q = check(Q), q(0, G, "Tam Thai ", "#F9AA07"), q(0, Q, "Bát Tọa ", "#F9AA07");
                var Z = y + J - 2;
                Z = check(Z), Z = check(Z), Z = check(Z), q(0, Z = check(Z), "Ân Quang ", "#F20D2E");
                var $ = A - J + 12 + 2;
                $ = check($), $ = check($), q(0, $ = check($), "Thiên Quý ", "#F9AA07");
                var ll, tl = check(al + e - 1),
                    el = check(fl + e - 1);
                q(0, tl, "Thiên Tài ", "#228B22"), q(0, el, "Thiên Thọ ", "#F9AA07");
                var il = e + 10;
                ll = (il = check(il)) + (13 - i), ll = (ll = check(ll)) + c - 1, q(1, ll = check(ll), "Đẩu Quân", "purple")
            }
        }(), 1 != chingay && 5 != chingay && 9 != chingay || (bl = 1), 2 != chingay && 6 != chingay && 10 != chingay || (bl = 10), 3 != chingay && 7 != chingay && 11 != chingay || (bl = 7), 4 != chingay && 8 != chingay && 12 != chingay || (bl = 4), "TCP" == saothem3 && q(0, bl, "Nhật Mã", "red"), "TCP" == saothem3 && q(0, check(bl + 7), "Nhật Hàm Trì", "#000000");
    rl = checkcan(2 * t + thangtk), Tl = check(thangtk + 2);
    nl.font = "  8pt Arial", f(rl, Tl), 1 == document.getElementById("ID_LICH").value && nl.fillText(thangtk + " (tk)", 520, 240 + 1 * l), g(rl), 1 == document.getElementById("ID_LICH").value && nl.fillText(can[rl], 560, 240 + 1 * l), h(Tl), 1 == document.getElementById("ID_LICH").value && nl.fillText(chi[Tl] + " (tk)", 595, 240 + 1 * l), f(rl, Tl), nl.fillText(nh[rl][Tl] + " (tk)", 770, 240 + 1 * l), nl.font = " 8pt Arial", q(1, check(Tl + 10), "Nguyệt Lệnh", "purple"), q(1, check(chingay + 10), "Nhật Thần", "purple"), q(1, check(c + 10), "Thời Thần", "purple"), O = t, rl = e;
    for (var Ml = 1; O != a || rl != r;) Ml++, rl++, ++O > 10 && (O = 1), rl = check(rl);
    1 == document.getElementById("ID_LICH").value && (Ml = namdl == nam ? namxemdl - namdl + 1 : namxemdl - namdl + 2);
    var Nl, Fl = al;
    for (Nl = t % 2 != 0 && 1 == gioitinh || t % 2 == 0 && 0 == gioitinh ? 1 : -1, Tl = cuc, O = 0; O < 12 && (ml = Tl - 1 + 10 * (O + 1), Fl > 12 && (Fl = 1), 0 == Fl && (Fl = 12), !(Ml >= (dl = Tl + 10 * O) && Ml <= ml)); O++) Fl += Nl;
    yl = checkcan(2 * t + 1);
    var _l = checkcan(Fl + yl - 1);
    if (chicungdaivan = check(Fl + 2), g(10), nl.fillText("thuộc Đại Vận", 560, 240 + 9 * l), g(_l), nl.fillText(can[_l], 660, 240 + 9 * l), h(chicungdaivan), nl.fillText(chi[chicungdaivan], 710, 240 + 9 * l), rl = _l, Tl = chicungdaivan, f(rl, Tl), nl.fillText(nh[rl][Tl], 770, 240 + 9 * l), nl.font = " 8pt Arial", nl.font = "  8pt Arial", nl.textAlign = "left", nl.fillStyle = "black", nl.font = "  8pt Arial", tl(t, 0, ""), J(t, 0, ""), nl.font = " 8pt Arial", 1 == id_luudaivan && (nl.font = "  8pt Arial", tl(_l, chicungdaivan, "Đv. "), nl.font = "  8pt Arial", J(_l, chicungdaivan, "Đv. "), z(_l, "Đv. "), Q(_l, "Đv. "), X(_l, "Đv. "), G(chicungdaivan, "Đv. "), function(l, t) {
            var e = ["", "mệnh", "phụ", "phúc", "điền", "quan", "nô", "di", "tật", "tài", "tử", "phu", "bào"],
                i = checkcan(2 * _l + 1);
            for (rl = l + 10, nl.font = "  8pt Arial", O = 1; O <= 12; O++) rl = check(rl), nl.fillStyle = "#00008B", 1 == O || 9 == O || 5 == O || 4 == O || 3 == O || 8 == O ? (nl.fillStyle = "#0004FF", nl.fillText(t + e[O], M[rl] - 145, N[rl] + 15), 1 == O && (nl.globalAlpha = .15, nl.fillStyle = "blue", nl.fillRect(M[rl] - 146, N[rl] + 2, 68, 16), nl.globalAlpha = 1)) : (nl.fillStyle = "black", nl.fillText(t + e[O], M[rl] - 145, N[rl] + 15)), nl.textAlign = "left", ctieuvan[O] = checkcan(O + i - 1), rl++
        }(chicungdaivan, "Đv. "), nl.font = "  8pt Arial", 1 == id_luunien && (nl.fillText("LNĐV tại cung " + chi[lndv(Ml, chicungdaivan, dl, xl)], 330, 240 + 9 * l), nl.font = "  8pt Arial", tl(a, 0, "L. "), nl.font = "  8pt Arial", J(a, 0, "L. "), z(a, "L. "), nl.font = "  8pt Arial", 1 != ID_LUUNHAT && Q(a, "L. "), X(a, "L. "), function(l, t) {
            var e = new Array;
            e[1] = "Thái Tuế", e[3] = "Tang Môn", e[7] = "Tuế Phá", e[9] = "Bạch Hổ", e[11] = "Điếu Khách", rl = l + 10, rl = check(rl), nl.font = "  8pt Arial", q(1, rl, t + "Thái Tuế ", "#030401"), q(1, rl = check(rl + 2), t + "Tang Môn ", "#030401"), rl = check(rl + 4), q(1, rl = check(rl + 2), t + "Bạch Hổ ", "#030401"), rl = check(rl + 2), rl = l + 10, rl = check(rl);
            var i = check(6 + rl),
                n = check(16 - rl);
            q(1, i, t + "Thiên Hư ", "#F20D2E"), q(1, n, t + "Thiên Khốc ", "#F20D2E")
        }(r, "L. "), G(r, "L. "), function(l, t) {
            var i, n = ["", "mệnh", "phụ", "phúc", "điền", "quan", "nô", "di", "tật", "tài", "tử", "phu", "bào"];
            for (rl = l + 10, O = 1; O <= 12; O++) nl.textAlign = "right", rl = check(rl), 1 == O && (nl.globalAlpha = .15, nl.fillStyle = "blue", nl.fillRect(M[rl] + 55, N[rl] - 13, 95, 16), nl.globalAlpha = 1), 1 == O || 9 == O || 5 == O || 4 == O || 3 == O || 8 == O ? (nl.fillStyle = "#0004FF", nl.fillText(t + n[O], M[rl] + 110, N[rl])) : (nl.fillStyle = "black", nl.fillText(t + n[O], M[rl] + 110, N[rl])), nl.font = "  8pt Arial", nl.textAlign = "right", O < 7 ? nl.fillText(namxemdl - 1 + O, M[rl] + 146, N[rl]) : nl.fillText(namxemdl - 1 + O - 12, M[rl] + 146, N[rl]), rl++;
            if (1 != e && 5 != e && 9 != e || (i = 11), 2 != e && 6 != e && 10 != e || (i = 8), 3 != e && 7 != e && 11 != e || (i = 5), 4 != e && 8 != e && 12 != e || (i = 2), rl = i + 10, nl.fillStyle = "black", nl.font = "  8pt Arial", nl.textAlign = "right", 1 == gioitinh)
                for (O = 1; O <= 12; O++) rl = check(rl), check(e + O - 1) == r ? (nl.fillStyle = "purple", rl, nl.fillStyle = "black", nl.globalAlpha = .15, nl.fillStyle = "blue", nl.fillRect(M[rl] + 90, N[rl] + 5, 60, 14), nl.globalAlpha = 1) : nl.fillStyle = "black", chitieuvan[rl] = check(e + O - 1), rl++;
            else
                for (O = 1; O <= 12; O++) rl = check(rl), check(e - O + 1) == r ? (nl.fillStyle = "purple", nl.fillStyle = "black", nl.globalAlpha = .15, nl.globalAlpha = .15, nl.fillStyle = "blue", nl.fillRect(M[rl] + 90, N[rl] + 5, 60, 14), nl.globalAlpha = 1, rl) : nl.fillStyle = "black", chitieuvan[rl] = check(e - O + 13), rl++;
            for (nl.fillStyle = "purple", O = 1; O <= 12; O++) f(ctieuvan[O], chitieuvan[O]), nl.textAlign = "right", nl.fillText(H[ctieuvan[O]] + " " + chi[chitieuvan[O]], M[check(O)] + 145, N[check(O)] + 15)
        }(r, "L. "), 1 == id_luunguyet && "TCP" == saothem3))) {
        tl(T, 0, "N. "), J(T, 0, "N. ");
        rl = k, O = u;
        "TCP" == saothem3 && 1 == ID_LUUNHAT && (nl.font = "  8pt Arial", nl.font = "  8pt Arial", tl(u, 0, "Nh. "), 1 == ID_LUUTHOI && (nl.font = "  8pt Arial", "TCP" == saothem3 && tl(y, 0, "T. ")))
    }
    if (1 == id_luudaivan && 1 == id_luunien) {
        var Ll, El, Pl, Cl = r + 10;
        for (Ll = (Cl = check(Cl)) + (13 - i), Ll = (Ll = check(Ll)) + c - 1, function(l) {
                var t, e = new Array;
                for (e[1] = "Th. 1", e[2] = "Th. 2", e[3] = "Th. 3", e[4] = "Th. 4", e[5] = "Th. 5", e[6] = "Th. 6", e[7] = "Th. 7", e[8] = "Th. 8", e[9] = "Th. 9", e[10] = "Th. 10", e[11] = "Th. 11", e[12] = "Th. 12", t = 0 == id_vdttl ? l : check(l), nl.font = "  8pt Arial", O = 1; O <= 12; O++) {
                    t = check(t), d == O & 1 == id_luunguyet ? (nl.fillStyle = "purple", nl.font = "  8pt Arial", nl.textAlign = "left", nl.fillText(e[O], M[t] - 141, N[t] + 141), nl.globalAlpha = .15, nl.fillStyle = "blue", nl.fillRect(M[t] - 145, N[t] + 128, 90, 16), nl.globalAlpha = 1) : (nl.fillStyle = "black", nl.textAlign = "left", nl.font = " 8pt Arial", nl.fillText(e[O], M[t] - 141, N[t] + 141)), nl.font = " 8pt Arial";
                    var i = 2 * a + O,
                        n = check(O + 2);
                    0 == n && (n = 12), i > 10 && (i -= 10), i > 10 && (i -= 10), i > 10 && (i -= 10), 10 == i && (i = 10), nl.textAlign = "left", nl.fillStyle = "black", nl.textAlign = "left", nl.fillStyle = "#00008B";
                    var h = i,
                        c = n;
                    f(h, c), nl.textAlign = "left", nl.fillText(H[h] + " " + chi[c], M[t] - 104, N[t] + 141), t++
                }
                nl.textAlign = "left", nl.font = " 8pt Arial"
            }(Ll = check(Ll)), rl = r, O = a; O <= 10; O++) rl++, rl = check(rl);
        if (1 == a || 6 == a ? Pl = 7 : 2 == a || 7 == a ? Pl = 5 : 3 == a || 8 == a ? Pl = 3 : 4 == a || 9 == a ? Pl = 1 : 5 != a && 10 != a || (Pl = 11), nl.font = "  8pt Arial", nl.textAlign = "left", nl.fillStyle = "black", El = check(rl + 10), "TCP" == saothem3 && (nl.font = "  8pt Arial", nl.textAlign = "right", nl.fillStyle = "black", El == nt ? (nl.fillText("L.TT", M[check(El)] + 92, N[check(El)] + 141), nl.fillText("L.TT", M[check(El + 1)] + 92, N[check(El + 1)] + 141)) : (nl.fillText("L.T", M[check(El)] + 82, N[check(El)] + 141), nl.fillText("L.T", M[check(El + 1)] + 82, N[check(El + 1)] + 141), nl.fillText("L.Tr", M[check(Pl)] + 92, N[check(Pl)] + 141), nl.fillText("L.Tr", M[check(Pl + 1)] + 92, N[check(Pl + 1)] + 141))), 1 == id_luunguyet) {
            Ll = (Ll = Cl + (13 - i)) + c - 1, Ll = check(Ll);
            var Vl, Ul = check(Ll + d - 2 + p);
            Ul = check(Ul), nl.textAlign = "right", nl.font = "  8pt Arial";
            var wl = new Array;
            if ("TCP" == saothem3 && 1 == ID_LUUNHAT)
                for (O = 1; O < 13; O++) wl[O] = 0;
            for (Tl = 1; Tl < 31; Tl++) nl.fillStyle = Tl == p ? "deeppurple" : "black", wl[Vl = check(check(check(Ll + d - 2 + Tl)))]++, nl.fillText(Tl + " ", M[Vl] - 16 * wl[Vl] + 162, N[Vl] + 141), Tl == p && (nl.globalAlpha = .2, nl.fillStyle = "blue", "TCP" == saothem3 && nl.fillRect(M[Vl] + 90, N[Vl] + 129, 55, 14), nl.globalAlpha = 1)
        }
    }
    0 != vitrithem3 && (nl.font = " 8pt Arial", q(0, vitrithem3, saothem3, "purple"));
    var Kl = al;
    0 == id_phieuphieu && (nl.strokeStyle = "black", nl.moveTo(W[Kl], R[Kl]), nl.lineWidth = .5, nl.lineTo(W[check(Kl + 6)], R[check(Kl + 6)]), nl.stroke(), nl.beginPath(), nl.strokeStyle = "black", nl.moveTo(W[Kl], R[Kl]), nl.lineWidth = .5, nl.lineTo(W[check(Kl + 4)], R[check(Kl + 4)]), nl.stroke(), nl.beginPath(), nl.strokeStyle = "black", nl.moveTo(W[Kl], R[Kl]), nl.lineWidth = .5, nl.lineTo(W[check(Kl + 8)], R[check(Kl + 8)]), nl.stroke()), nl.beginPath();
    var Wl = al;
    "TCP" == saothem3 && 1 == id_luudaivan && (Wl = chicungdaivan, 1 == id_luunien && (Wl = check(r + 10), 1 == id_luunguyet && (Wl = check(Ll + d - 1), 1 == ID_LUUNHAT && (Wl = check(check(check(check(Ll + d - 2 + p)))), 1 == ID_LUUTHOI && (Wl = check(Ll + d - 3 + p + 1 + INT((gioxem + 1) / 2))))))), "TCP" == saothem3 && (nl.globalAlpha = 1, yinyang(nl, W[Wl], R[Wl], 10, 0, 0, "#7D542A"), nl.stroke()), 0 != cannamthem1 && tl(cannamthem1), 0 != cannamthem && tl(cannamthem);
    var Rl, Ol, ql, Gl, Ql, zl, Xl, Yl, jl, Jl, Zl, $l, lt, tt, et, it, nt, ht = new Array,
        ct = new Array;
    _ = 20, L = 20, E = Rl = 150, P = Rl, C = Zl = Jl = (Yl = (Xl = (Ol = 20) + 150) + 150) + 150, V = (lt = ($l = (jl = Rl) + 300) + 300) + 300, U = Zl, w = tt = Ql = (Gl = (ql = Rl + 300) + 300) + 300, K = (et = (zl = 20) + 150) + 10;
    for (ht[1] = jl, ht[2] = P, ht[3] = E, ht[4] = E, ht[5] = .5 * (ql + Gl), ht[6] = .5 * (ql + Gl), ht[7] = Ql, ht[8] = tt, ht[9] = w, ht[10] = w, ht[11] = .5 * (lt + $l), ht[12] = .5 * (lt + $l), ht[0] = M[12], ht[-1] = M[11], ct[1] = K + 12 + 170, ct[2] = K + 12 + 170, ct[3] = Ol + 2, ct[4] = Ol + 2, ct[5] = _ + 2, ct[6] = L + 2, ct[7] = zl + 2, ct[8] = zl + 2, ct[9] = K + 12 + 170, ct[10] = K + 12 + 170, ct[11] = ct[9], ct[12] = ct[9], rl = e, O = t; O <= 10; O++) rl++, rl = check(rl);
    if (1 == t || 6 == t ? nt = 7 : 2 == t || 7 == t ? nt = 5 : 3 == t || 8 == t ? nt = 3 : 4 == t || 9 == t ? nt = 1 : 5 != t && 10 != t || (nt = 11), nl.textAlign = "center", it = check(rl + 10), nl.textAlign = "center", it != nt ? (nl.fillStyle = "black", nl.fillRect(ht[nt] - 40, ct[nt] + 141, 80, 14), nl.fillRect(ht[it] - 40, ct[it] + 141, 80, 14), nl.font = " 7pt Arial", nl.textAlign = "center", nl.fillStyle = "white", nl.fillText("Tuần", ht[it], ct[it] + 152), nl.font = " 7pt Arial", nl.fillText("Triệt", ht[nt], ct[nt] + 152)) : (nl.font = " 7pt Arial", nl.fillStyle = "black", nl.fillRect(ht[nt] - 40, ct[nt] + 141, 80, 14), nl.fillStyle = "white", nl.textAlign = "center", nl.fillText("Tuần-Triệt", ht[nt], ct[nt] + 152)), "TCP" == saothem3) {
        nl.textAlign = "left";
        rl = k, O = u;
        if (1 == ID_LUUNHAT) {
            for (nl.font = "  8pt Arial", nl.font = "  8pt Arial", O = u + 1; O <= 10; O++) rl++;
            nl.textAlign = "left", nl.font = "  8pt Arial", nl.globalAlpha = .2, nl.fillStyle = "blue", nl.fillRect(ht[check(rl)] - 90, ct[check(rl)] + 141, 180, 14), nl.globalAlpha = 1, nl.font = " 8pt Arial", nl.globalAlpha = .2, nl.globalAlpha = 1, nl.textAlign = "left"
        }
    }
    1 == id_luunguyet && 1 == ID_LUUNHAT && 1 == ID_LUUTHOI && (nl.font = "  8pt Arial");
    var at, ft, rt = al;
    0 != vitrithem && (nl.font = " 8pt Arial", q(0, vitrithem, saothem, "purple")), 0 != vitrithem1 && (nl.font = " 8pt Arial", q(0, vitrithem1, saothem1, "purple")), 0 != vitrithem2 && (nl.font = " 8pt Arial", q(0, vitrithem2, saothem2, "purple")), at = document.getElementById("CHUGIAI").value, nl.textAlign = "left", nl.fillStyle = "purple", " " != at && nl.fillText(at, 378, 240 + 5 * l);
    var Tt = 0;
    if (1 == id_phieuphieu)
        for (O = 1; O <= 12; O++) Z(O, "Lộc ---\x3e ", "Kỵ ---\x3e ", "Quyền ---\x3e ", "Khoa ---\x3e ");
    var ot, gt = al;
    if (nl.fillStyle = "white", nl.textAlign = "center", nl.strokeStyle = "#7D542A", nl.shadowColor = "#999", nl.shadowBlur = 10, nl.shadowOffsetX = 5, nl.shadowOffsetY = 5, nl.rect(300, 205, 600, 20), nl.fillStyle = "#7D542A", nl.fill(), nl.stroke(), nl.strokeStyle = "#7D542A", nl.shadowColor = "#999", nl.shadowBlur = 0, nl.shadowOffsetX = 0, nl.shadowOffsetY = 0, nl.rect(300, 205, 600, 20), nl.closePath(), nl.fill(), nl.stroke(), nl.fillStyle = "blue", nl.fillStyle = "red", nl.font = "italic 16pt Arial", nl.fillStyle = "black", nl.fillStyle = "black", nl.fillText("http://trungchaugroup.com", 600, 240 + 8 * l), nl.fillStyle = "black", nl.textAlign = "center", nl.strokeStyle = "red", nl.font = "italic 18pt Arial", nl.fillStyle = "black", nl.textAlign = "left", nl.font = "  18pt Arial", nl.textAlign = "center", t % 2 != 0 && 1 == gioitinh && (ot = "Dương Nam "), t % 2 != 0 && 0 == gioitinh && (ot = "Dương Nữ "), t % 2 != 1 && 1 == gioitinh && (ot = "Âm Nam "), t % 2 != 1 && 0 == gioitinh && (ot = "Âm Nữ "), ot += ul, nl.fillText(ot, 600, 200), nl.font = "  8pt Arial", nl.fillStyle = "white", Il > 6 && (gt = check(gt + 6), Il -= 6), nl.fillText(tinhhe[Il][gt], 600, 220), nl.textAlign = "left", nl.fillStyle = "blue", 1 == id_phieuphieu)
        for (F = 1; F <= 12; F++) ft = check(F + 6), 6 == check(F + 12 - phiky[F]) && ky == check(F + 6) && (loc != ky && philoc[ft] != ft && phiky[ft] != ft && (q(1, F, "Nghịch Thủy Kỵ"), Tt = 1), 0 == Tt && q(1, F, "Tiết Xuất Kỵ")), phiky[phiky[F]] == F && phiky[F] != F && q(1, F, "Tuần Hoàn Kỵ"), philoc[phiky[F]] == F && phiky[F] != check(F + 6) && q(1, F, "Thị Phi Kỵ " + pcung[check(phiky[F] - rt + 13)]), phiky[philoc[F]] == F && philoc[F] != check(F + 6) && q(1, F, "Thị Phi Lộc " + pcung[check(philoc[F] - rt + 13)]);
    check(al + 10) == ky && (phiky[ky] = ky) && ky % 3 == 0 && q(1, ky, "Khiếm Trái Kỵ"), Fl != al && Fl != check(al + 4) && Fl != check(al + 8) || phiky[Fl] != check(al + 2) && phiky[Fl] != check(al + 6) && phiky[Fl] != check(al + 10) || q(1, Fl, "Phản Cung Kỵ"), 1 == phiky[1] && q(1, 1, "Tứ Mã Kỵ"), 4 == phiky[4] && q(1, 4, "Tứ Mã Kỵ"), 7 == phiky[7] && q(1, 7, "Tứ Mã Kỵ"), 10 == phiky[10] && q(1, 10, "Tứ Mã Kỵ"), ky % 3 == 1 && q(1, 10, "Tứ Mã Kỵ"), 3 != ky && 6 != ky && 9 != ky && 12 != ky || (phiky[ky] != ky && philoc[ky] != ky ? q(1, ky, "Nhập Khố Kỵ") : q(1, ky, "Tiết Khố Kỵ")), nl.fillStyle = "black", nl.fillText(function() {
        var l = "";
        1 != e && 7 != e && 4 != e || 10 == c && (2 != c && 5 != c && 8 != c && 11 != c || (l += " Hòa Thượng")), 3 != e && 7 != e && 11 != e || 5 == c && (l += " Thiên Điếu"), 1 != i && 2 != i && 3 != i || 9 == cangio && 5 == chigio && (l += " Tứ Quý");
        var t = check(e + 11 - i + n - c + 24);
        11 != t && 5 != t || 1 == gioitinh && (l += " Kim Xà Thiết Tỏa"), 7 == check(i + c) && (l += " Quan Sát"), (i + 2) / 3 != 1 || 8 != c && 2 != c || (l += " Diêm Vương"), (i + 2) / 3 != 2 || 5 != c && 11 != c || (l += " Diêm Vương"), (i + 2) / 3 != 3 || 1 != c && 7 != c || (l += " Diêm Vương"), (i + 2) / 3 != 4 || 4 != c && 10 != c || (l += " Diêm Vương"), (i + 2) / 3 == 1 && 7 == c && (l += " Dạ Đề"), (i + 2) / 3 == 2 && 10 == c && (l += " Dạ Đề"), (i + 2) / 3 == 3 && 1 == c && (l += " Dạ Đề"), (i + 2) / 3 == 4 && 4 == c && (l += " Dạ Đề"), "" != l && (l = "Bị sinh phạm giờ" + l + ".");
        var h = namxemdl - nam + 1;
        return h % 9 != 1 && h % 9 != 3 && h % 9 != 6 && h % 9 != 8 || 0 == gioitinh && (l += " Năm nay phạm Kim Lâu"), l
    }(), 630, 240 + 5 * l), il.addEventListener("mousedown", getPosition, !1), nl.fillStyle = "#F9AA07", "TCP" == saothem3 && 1 == id_luudaivan && (cuc = timcuc(_l, chicungdaivan), 1 == id_luunien && (cuc = timcuc(checkcan(2 * t + al), al)));
    var ut = cuc - n % cuc;
    n % cuc == 0 && (ut = 0);
    var kt, yt = (n + ut) / cuc;
    return ut % 2 == 0 && (kt = yt + ut), ut % 2 != 0 && (kt = yt - ut), kt < 1 && (kt = check(kt + 12)), 1 == id_luudaivan && 1 == id_luunien && q(1, kt, "L. Tọa "), 1 == id_luudaivan && 1 != id_luunien && q(1, kt, "Đv. Tọa"), q(1, 1, new Date - D), dataURL = il.toDataURL(), image4me = dataURL, dataURL
}
tinhhe[5][5] = "Tử vi Tí Ngọ quan hệ tinh thần / vật chất", tinhhe[5][7] = "Phá quân Dần Thân phản kháng / thuận tòng", tinhhe[5][9] = "Liêm Phủ Thìn Tuất cảm tình / lý trí", tinhhe[5][10] = "Thái âm Tị Hợi hướng ngoại / hướng nội", tinhhe[5][11] = "Tham lang Tí Ngọ ham muốn vật chất / tinh thần", tinhhe[5][12] = "Đồng Cự Sửu Mùi sáng sủa / âm ám", tinhhe[5][1] = "Vũ Tướng Dần Thân quá cương / quá nhu", tinhhe[5][2] = "Nhật Lương Mão Dậu tường hòa / cô kị", tinhhe[5][3] = "Thất sát Thìn Tuất lý tưởng / ảo tưởng", tinhhe[5][5] = "Thiên cơ Tị Hợi quyền biến / cơ mưu", tinhhe[6][6] = "Tử Phá Sửu Mùi bất ổn / an định ", tinhhe[6][8] = "Thiên phủ Mão Dậu trì trọng / cẩn thận", tinhhe[6][9] = "Thái âm Thìn Tuất mục tiêu / manh động", tinhhe[6][10] = "Liêm Tham Tị Hợi tình cảm / vật dục", tinhhe[6][11] = "Cự môn Tí Ngọ anh hoa nội liễm / nội tâm nghi kị", tinhhe[6][12] = "Thiên tướng Sửu Mùi ưu nhã / dung tục", tinhhe[6][1] = "Đồng Lương Dần Thân lãng mạn / nguyên tắc", tinhhe[6][2] = "Vũ Sát Mão Dậu quyết đoạn / đoản lự", tinhhe[6][3] = "Thái dương Thìn Tuất bất tha luy / tha luy", tinhhe[6][5] = "Thiên cơ Tí Ngọ dương cương / âm nhu", tinhhe[1][1] = "Tử Phủ Dần Thân chủ động / bị động", tinhhe[1][2] = "Thái âm Mão Dậu kiên cường / bạc nhược", tinhhe[1][3] = "Tham lang Thìn Tuất kiên nhẫn / táo tiến", tinhhe[1][4] = "Cự môn Tị Hợi thâm trầm / xung động", tinhhe[1][5] = "Liêm Tướng Tí Ngọ cương nghị / thúy nhược", tinhhe[1][6] = "Thiên lương Sửu Mùi chính trực / tinh minh", tinhhe[1][7] = "Thất sát Dần Thân cô cao / uy quyền", tinhhe[1][8] = "Thiên đồng Mão Dậu không hư / sung thật", tinhhe[1][9] = "Vũ khúc Thìn Tuất nhân tuần / tiến thủ", tinhhe[1][10] = "Thái dương Tị Hợi Tích cực / tiêu cực", tinhhe[1][11] = "Phá quân Tí Ngọ ngoan hiêu / quả cảm", tinhhe[1][12] = "Thiên cơ Sửu Mùi thượng tiến / hạ du", tinhhe[2][2] = "Tử Tham Mão Dậu vật dục / tình dục ", tinhhe[2][3] = "Cự môn Thìn Tuất kích phát / tao kị", tinhhe[2][4] = "Thiên tướng Tị Hợi khai sáng lực / nhân nhân thành sự", tinhhe[2][5] = "Thiên lương Tí Ngọ cô khắc / dung hòa", tinhhe[2][6] = "Liêm Sát Sửu Mùi phấn phát / cương lệ", tinhhe[2][9] = "Thiên đồng Thìn Tuất khoáng đạt / đoản chí", tinhhe[2][10] = "Vũ Phá Tị Hợi thích ứng / phản ảo", tinhhe[2][11] = "Thái dương Tí Ngọ hư phù / trầm ổn", tinhhe[2][12] = "Thiên phủ Sửu Mùi khiêm hòa / khiếp nhược.", tinhhe[2][1] = "Cơ Âm Dần Thân lý trí / tình tự", tinhhe[3][3] = "Tử Tướng Thìn Tuất hữu tình / vô tình", tinhhe[3][4] = "Thiên lương Tị Hợi phù đãng / ổn định", tinhhe[3][5] = "Thất sát Tí Ngọ quyền uy / khắc kị", tinhhe[3][7] = "Liêm trinh Dần Thân mẫn cảm / đạp thật", tinhhe[3][9] = "Phá quân Thìn Tuất thiên khô / điều hòa", tinhhe[3][10] = "Thiên đồng Tị Hợi bạc nhược / kiên cường", tinhhe[3][11] = "Vũ Phủ Tí Ngọ sanh tài / lý tài", tinhhe[3][12] = "Âm Dương Sửu Mùi khai láng / trầm uất.", tinhhe[3][1] = "Tham Lang Dần Thân vật dục / tình dục", tinhhe[3][2] = "Cơ Cự Mão Dậu ổn trọng / phù bạc", tinhhe[4][4] = "Tử Sát Tị Hợi quyền uy / chuyên quyền", tinhhe[4][8] = "Liêm Phá Mão Dậu phụng công / tư lợi", tinhhe[4][10] = "Thiên phủ Tị Hợi tường hòa / quyền thuật", tinhhe[4][11] = "Đồng Âm Tí Ngọ Tích cực / tiêu cực", tinhhe[4][12] = "Vũ Tham Sửu Mùi dục vọng / dã tâm", tinhhe[4][1] = "Cự Nhật Dần Thân đắc trợ / cô lập", tinhhe[4][2] = "Thiên tướng Mão Dậu chính trực / tuần tư", tinhhe[4][3] = "Cơ Lương Thìn Tuất tiêm khắc / minh đoạn";