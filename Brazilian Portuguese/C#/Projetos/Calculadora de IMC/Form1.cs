using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CalculadoraIMC
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            // Obter os valores do TextBox
            float peso = float.Parse(txtPeso.Text);
            float altura = float.Parse(txtAltura.Text);

            // Calcular o IMC
            float imc = peso / (altura * altura);

            // Exibir o resultado
            Resultado.Text = "Seu IMC é: " + Environment.NewLine + imc.ToString("F2");
            Resultado.Visible = true;

            // Adicionar classificação
            if (imc < 18.5)
                Resultado.Text += " (Abaixo do peso)";
            else if (imc >= 18.5 && imc < 24.9)
                Resultado.Text += " (Peso normal)";
            else if (imc >= 25 && imc < 29.9)
                Resultado.Text += " (Sobrepeso)";
            else
                Resultado.Text += " (Obesidade)";


            if (!float.TryParse(txtPeso.Text, out peso) || !float.TryParse(txtAltura.Text, out altura))
            {
                MessageBox.Show("Por favor, insira valores numéricos válidos.");
                return;
            }


        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
    }
}
