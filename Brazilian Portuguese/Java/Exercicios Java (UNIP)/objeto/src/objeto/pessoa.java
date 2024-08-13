package objeto;

public class pessoa {

// atributos (as características específicas)
	private	String nome, cor_dos_olhos, cor_da_pele; 
	private char sexo;
	private int idade;
	private float peso, altura;
	
// construtores - a forma como o objeto será criado
	public pessoa() {
		this.cor_dos_olhos = "";
		this.cor_da_pele = "";
		this.sexo = ' ';
		this.idade = 0;
		this.peso = 0f;
		this.altura = 0f; 
	}
	
		public pessoa(String nome, String cor_dos_olhos, String cor_da_pele, 
				char sexo, int idade, float peso, float altura) {
		
		this.nome = nome;
		this.cor_dos_olhos = cor_dos_olhos;
		this.cor_da_pele = cor_da_pele;
		this.sexo = sexo;
		this.idade = idade;
		this.peso = peso;
		this.altura = altura;
		
	}
	
// métodos (funções) (ações)   	
	public void falar() {
		System.out.println("Alô Mundo");
		
		
	}
	
// métodos gets e sets
	public String getNome() {
		return nome;
	}
	
	public String getCorDosOlhos() {
		return cor_dos_olhos;
	}
	
	public String getCorDaPele() {
		return cor_da_pele;	
	}
	
	public int getIdade() {
		return idade;
	}
	
	public char getSexo() {
		return sexo;
	}
	
	public float getPeso() {
		return peso;
	}
	
	public float getAltura() {
		return altura;
	}
	
	
	
}
