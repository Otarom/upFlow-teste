 angular.module('Calculator', []);
 angular.module('Calculator').controller('ctrlCalc', function($scope){
	 
	$scope.divs={one:true, two:false, three:false}; // definição das variáveis de visibilidade das divs
	 
	$scope.info = {}; // definição das variáveis que vão ser inseridas pelo usuário
	  
	$scope.createInputs=function(){// função para criação dos inputs de recebimento de valores
		//alert($scope.qtdCamp) debug
		
		
		
		
		//alert($scope.info.qtdCamp) debug2
		
		$scope.arrayCampos = []  //criação do array de denominação das variáveis dos campos
		for (i=0;i<$scope.info.qtdCamp;i++){ //preenchimento do array e criação dos campos
			$scope.textNum= "Número" + i;
			$scope.arrayCampos.push(i+1);
		}
		//alert($scope.arrayCampos) debug3


		// troca de visibilidade das divs
		$scope.divs.one=false 
		$scope.divs.two=true
		
	}	
	

	$scope.submitNumber = function(){ //função de calculo
	    $scope.resultado = 0;
		for (i=0;i<$scope.info.qtdCamp;i++){ // for para obtenção de todos os inputs
			$scope.resultado+=parseFloat($scope.info.num[i+1]); //soma
			// alert($scope.info.num[i+1]) debug4
		}

		// troca de visibilidade das divs
		$scope.divs.two=false
		$scope.divs.three=true
	}
	
	
	$scope.back = function(){ // função retorno para a tela inicial

		for (i=0;i<$scope.info.qtdCamp;i++){ // for para obtenção de todos os inputs
		$scope.info.num[i+1]=""; //reset dos campos da soma
		}

		$scope.info.qtdCamp = ""; // reset do primeiro campo

		// troca de visibilidade das divs
		$scope.divs.one=true
		$scope.divs.two=false 
		$scope.divs.three=false
	}
	
	
 });