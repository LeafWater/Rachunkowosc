//definicja klasy Questions and Answers, przechowującej dane na temat pytań i odpowiedzi pobranych z bazy danych
//klasa jako parametry przyjmuje:
//typ int
//typ typ string 5x z rzędu
class QA
{

    constructor(nr,tresc,odpA,odpB,odpC,odpD)
    {
        this.nr = nr;
        this.tresc = tresc;
        this.odpA = odpA;
        this.odpB = odpB;
        this.odpC = odpC;
        this.odpD = odpD;
    }
    get nr() { return this.nr; }
    get tresc() { return this.tresc; }
    get odpA() { return this.odpA; }
    get odpB() { return this.odpB; }
    get odpC() { return this.odpC; }
    get odpD() { return this.odpD; }
    set nr(nr) { this.nr = nr; }
    set tresc(tresc) { this.tresc = tresc; }
    set odpA(odpA) { this.odpA = odpA; }
    set odpA(odpB) { this.odpB = odpB; }
    set odpA(odpC) { this.odpC = odpC; }
    set odpA(odpD) { this.odpD = odpD; }
}
//test powyższej klasy, bez dostępu do bazy danych


function Pytania(nr,tresc,odpA,odpB,odpC,odpD)
{
    this.nr = nr;
    this.tresc = tresc;
    this.odpA = odpA;
    this.odpB = odpB;
    this.odpC = odpC;
    this.odpD = odpD;
}

function StworzTablicePytan()
{
    //zmienna tablicowa przychowująca wszystkie pytania i odpowiedzi znajdujące się w bazie, jako obiekty klasy Pytania
    var pytania = {};
    //pętla, która indeksom zmiennej pytania, na podstawie "var i" przypisuje poszczególne wartości, z bazy danych
    for(var i = 0 ; i < 40 ; i++)
    {
        pytania[i] = new Pytania(i, i + " tresc pytania " + i, "odp A " + i, "odp B " + i, "odp C " + i, "odp D " + i);
    }
    var j = pytania.length;
    var przechowaj, losuj;

    //zwracamy tablicę wszystkich pytań, ułożonych w losowej kolejności
    return pytania;
}

function LosujPytaniaDoTestu()
{
    //zmienna tablicowa, która będzie przxychowywać elementy, które będziemy wyświetlać na stronie z pytaniami
    var tablicaLosowychPytan = {};
    //zmienna tablicowa, zawierająca wszystkie pytania z bazy danych
    var tablicaWszystkichPytan = StworzTablicePytan();
    //pętla, która wykonuje się tyle razy, ile jest pytań w teście
    for(var i = 0; i < 20 ; i++)
    {
        //do indeksu zmiennej są losowo przypisywane elementy z ogólnej bazy
        tablicaLosowychPytan[i] = [new Set()]
        console.log(tablicaLosowychPytan[i]);
    }
    //zwracamy zmienną tablicową, już z konkretnymi wartościami, aby następnie móc wykorzystać funckję jako wartość zmiennej
    return tablicaLosowychPytan;
}

$(document).ready(function ()
{
    //przywiązanie do wszyskitch leemetnów listy
    var allLinks = $('li a');

    $(allLinks).click(function ()
    {
        var target = $(this);
        var scroll = $(target.attr('href'));
            $('html, body').animate(
                {
                    scrollTop: scroll.offset().top - 70
                }, 1000);
    });
});
//zmienna pomocnicza, odpowiadająca za indeks pytań wylosowanych poniżej
var nrPytania = 1;
//zmienna tablicowa która zawiera wszystkie wylosowane do testu pytania
var pytaniaDoTestu = LosujPytaniaDoTestu();
$(".nastepne").click(function ()
{
    //nie istnieje pytania nr 21, więc w momencie gdy mamy 20, chcemy w następnej kolejności wyświetlnić nr 1
    if(nrPytania === 20) { nrPytania = 1; }
    //w przeciwnym wypadku wyświetlamy kolejne pytanie
    else { nrPytania++; }
    //na podstawie indeksu, odpowiednim elementon przypisujemy odpowiednie wartości
    $(".pytanie").text(pytaniaDoTestu[nrPytania].tresc);
    $(".odp-A").text(pytaniaDoTestu[nrPytania].odpA);
    $(".odp-B").text(pytaniaDoTestu[nrPytania].odpB);
    $(".odp-C").text(pytaniaDoTestu[nrPytania].odpC);
    $(".odp-D").text(pytaniaDoTestu[nrPytania].odpD);
    $(".nr-pytania").text(nrPytania + "/20");
});
$(".poprzednie").click(function ()
{
    //nie istnieje pytania nr 0, więc w momencie gdy mamy 1, chcemy w następnej kolejności wyświetlnić nr 20
    if(nrPytania === 1) { nrPytania = 20; }
    //w przeciwnym wypadku wyświetlamy kolejne pytanie
    else { nrPytania--; }
    //na podstawie indeksu, odpowiednim elementon przypisujemy odpowiednie wartości
    $(".pytanie").text(pytaniaDoTestu[nrPytania].tresc);
    $(".odp-A").text(pytaniaDoTestu[nrPytania].odpA);
    $(".odp-B").text(pytaniaDoTestu[nrPytania].odpB);
    $(".odp-C").text(pytaniaDoTestu[nrPytania].odpC);
    $(".odp-D").text(pytaniaDoTestu[nrPytania].odpD);
    $(".nr-pytania").text(nrPytania + "/20");
});