using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace menor_de_tres
{
    internal class Program
    {
        static void Main(string[] args)
        {
            CultureInfo CI = CultureInfo.InvariantCulture;

            int a, b, c, menor;

            Console.Write("Primeiro Valor: ");
            a = int.Parse(Console.ReadLine());
            Console.Write("Segundo Valor: ");
            b = int.Parse(Console.ReadLine());
            Console.Write("Terceiro Valor: ");
            c = int.Parse(Console.ReadLine());

            if (a < b && a < c){
                menor = a;
            }
            else if (b < c)
            {
                menor = b;
            }
            else
            {
                menor = c;
            }

            Console.WriteLine("MENOR = " + menor);

        }
    }
}
