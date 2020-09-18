programa {
	funcao inicio() {
	    real valor1, valor2, resultado
	    inteiro operacao
	    
		escreva("Escolha a operação: 1 - Soma; 2 - Subtração; 3 - Multiplicação; 4 - Divisão \n")
		leia(operacao)
		
		se(operacao == 1 ou operacao == 2 ou operacao == 3 ou operacao == 4){
		    
    		escreva("Digite o valor 1: \n")
    		leia(valor1)
    		
    		escreva("Digite o valor 2: \n")
    		leia(valor2)
    		
    	    se(operacao == 1){
    		    resultado = valor1 + valor2
        	}senao se(operacao == 2){
    	        resultado = valor1 - valor2
            }senao se(operacao == 3){
                resultado = valor1 * valor2
            }senao se(operacao == 4){
                    resultado = valor1 / valor2
            }senao{
                resultado = 0
            }
            		  
    	    escreva("Resultado = ", resultado)
    	    
		}senao{
		    
		    escreva("Operacao não existe\n")
		}
	}
}
