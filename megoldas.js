///1.feladat

// Dragán Tibor
// Junior Frontend fejleszto
// Team11

function keszito() {
    document.write("Dragán Tibor");
    document.write("Junior Frontend fejlesztő");
    document.write("Team11");
}
keszito();



/// 2.feladat

function hatvanyozo(szam, hatvany) {
    return szam ** hatvany;
}

document.write(hatvanyozo(2, 3));
document.write(hatvanyozo(5, 3));



///3.feladat

function parosLetrehoz(also, felso) {
    let szam = Math.round(Math.random() * (felso - also) + also);
    if (szam % 2 == 0) {
        return szam;
    }
    else if (szam % 2 == 1) {
        return ++szam;
    }

}
document.write(parosLetrehoz(1, 100));


///4.feladat

function testTomegIndex(suly, magassag) {
    let tti = suly / (magassag * magassag);
    if (tti < 16) {
        return "sulyosSovanysag";
    }
    else if (tti < 17) {
        return "mersekeltSovanysag";
    }
    else if (tti < 18.5) {
        return "enyheSovanysag";
    }
    else if (tti < 25) {
        return "normalisTestsuly";
    }
    else if (tti < 30) {
        return "tulsulyos";
    }
    else if (tti < 35) {
        return "IfokuElhizas";
    }
    else if (tti < 40) {
        return "IIfokuElhizas";
    }
    else if (tti >= 40) {
        return "IIIfokuSulyosElhizas";
    }
}
document.write(testTomegIndex(200, 2));
document.write(testTomegIndex(45, 1.5));



///5.feladat

function egeszOsztoE(szam, oszto) {
    if (szam % oszto == 0) {
        return true;
    }
    else {
        return false;
    }
}
document.write(egeszOsztoE(25, 5));
document.write(egeszOsztoE(1050, 7));
document.write(egeszOsztoE(2048, 3));