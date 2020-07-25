Number.prototype.log = function () {
  console.log(+this);
};

Function.prototype.log = function () {
  console.log(this.toString());
};

// Função Identidade
// f(x) = x
const I = (a) => a;

I(3).log();
I(I).log();

// Função Self Application
const SELF = (f) => f(f);

SELF(I).log();

// Função que sempre retorna o primeiro parâmetro
const PRI = (a) => (_) => a;

PRI(7)(11).log();

// Função que sempre retorna o último parâmetro
const ULT = (_) => (b) => b;

ULT(7)(11).log();

// Função que faz inversão de lógica
const TRO = (f) => (a) => (b) => f(b)(a);

TRO(ULT)(7)(11).log();
TRO(PRI)(6)(12).log();

// Função que retorna último valor, definida através de composição de outras
// funções -> TRO - Função de inversão de lógica, PRI - Função que retorna o
// primeiro parâmetro
const ULT2 = (a) => (b) => TRO(PRI)(a)(b);
ULT2(13)(20).log();

// Boolean TRUE e FALSE
// TRUE  ? <PRI> :  ULT
// FALSE ?  PRI  : <ULT>

const T = PRI;
const F = ULT;

T.toString = () => 'Verdadeiro (PRI)';
F.toString = () => 'Falso (ULT)';

T.log();
F.log();

// NOT
const NOT = (a) => a(F)(T);

NOT(F).log();
NOT(T).log();

// AND
// TRUE  && TRUE  -> TRUE
// TRUE  && FALSE -> FALSE
// FALSE && TRUE  -> FALSE
// FALSE && FALSE -> FALSE
const AND = (a) => (b) => a(b)(F);

AND(T)(T).log();
AND(T)(F).log();
AND(F)(T).log();
AND(F)(F).log();

// OR
// TRUE  || TRUE  -> TRUE
// TRUE  || FALSE -> TRUE
// FALSE || TRUE  -> TRUE
// FALSE || FALSE -> FALSE
const OR = (a) => (b) => a(T)(b);

OR(T)(T).log();
OR(T)(F).log();
OR(F)(T).log();
OR(F)(F).log();

// Função de Igualdade Lógica
// TRUE  == TRUE  -> TRUE
// TRUE  == FALSE -> FALSE
// FALSE == TRUE  -> FALSE
// FALSE == FALSE -> TRUE
const EQ = (a) => (b) => a(b)(NOT(b));

EQ(T)(T).log();
EQ(T)(F).log();
EQ(F)(T).log();
EQ(F)(F).log();

// XOR
// TRUE  && TRUE  -> FALSE
// TRUE  && FALSE -> TRUE
// FALSE && TRUE  -> TRUE
// FALSE && FALSE -> FALSE
const XOR = (a) => (b) => a(NOT(b))(b);

XOR(T)(T).log();
XOR(T)(F).log();
XOR(F)(T).log();
XOR(F)(F).log();
