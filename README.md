# Aufgabe-2-String-Calc-Kata

a) base
Erstellen Sie eine Funktion mit folgender Signatur:
const sum = stringCalc(numbers)

Diese Funktion soll zwei Zahlen addieren können, die in dem Parameter numbers als String z.B. "" oder "1" oder "1,2" vorliegen können.

b) multiple
Schreiben Sie die Funktion so um, dass der Parameter numbers eine beliebige Anzahl an Zahlen enthalten kann: "1,2,3" oder "4,5,6,7" usw.

c) newline
Sorgen Sie dafür, dass neben Kommata auch newLines erlaubt werden. D.h. "1\n2,3" führt zum Ergebnis 6. Wenn das Newline einem Komma folgt ist kann das ignoriert werden: "1,\n"

d) delimiter
Unterstützen Sie unterschiedliche Trennzeichen neben dem Komma. Um ein anderes Trennzeichen einzugeben, müsste der Eingabestring wie folgt anfangen: "//[delimiter]\n[numbers...]".
Soll also anstatt einem Komma ein Strichpunkt verwendet werden, würde folgender Eingabeparameter zum Ergebnis 3 führen: "//;\n1;2"

e) not_negatives
Wird eine negative Zahl eingegeben, soll eine Exception mit der message "negatives not allowed" und der eingegebenen negativen Zahl geworfen werden.
Enthält die Eingabe mehrere negative Zahlen sollen alle negative Zahlen in der Fehlermeldung enthalten sein.

f) ignoreThousands
Wenn Zahlen größer als 1000 eingegeben werden, sollen diese ignoriert werden. Also "2,1001" ergibt 2

g) cli
Schreiben Sie ein Programm, welches so einen String auf der Kommandozeile entgegennimmt und das Ergebnis mit console.log ausgibt. Nutzen Sie die stringCalc-Funktion, die sie in den vorherigen Aufgabenstellungen schon programmiert haben.
