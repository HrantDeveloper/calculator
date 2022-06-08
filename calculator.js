class Calculator{
    constructor(){
        this.input=document.querySelector('input');
        this.clearAction=document.querySelector('.clear-action');
        this.backAction=document.querySelector('.back-action');
        this.equals=document.querySelector('#equals');
        this.numberButtons = document.querySelectorAll('.number');
        this.actions=document.querySelectorAll('.action')
        this.array=[]

        this.input.addEventListener('input',(evt)=>{
            // this.array.push(Number(this.input.value));
            // console.log(this.array)
            
        })
        this.clearAction.addEventListener('click',(evt)=>{
            this.input.value="";
            this.array=[];
        })
        this.numberButtons.forEach(button => {
            button.addEventListener('click', () => {
              
              this.input.value+=button.innerText;
            //   this.input.updateDisplay()
            
            })
          })
          this.backAction.addEventListener('click',(evt)=>{
            // let x=this.input.value.split('');
            let y=this.input.value;
            let z=this.input.value.split('').pop();
            console.log(z)
            console.log(y)
          
        })

          this.actions.forEach(button => {
            button.addEventListener('click', () => {
              this.choosedAction=button.innerText;
              this.array.push(Number(this.input.value));
              this.input.value=""
            })
          })

          this.equals.addEventListener('click',(evt)=>{
              this.array.push(Number(this.input.value));
              let result=this.array[0];
              // let minusResult=this.array[0];
             for(let i=1;i<this.array.length;i++){
                if(this.choosedAction == '+' ){
                   result+=this.array[i];
                }
                else if(this.choosedAction == '-'){
                    result-=this.array[i];
                    // minusResult-=this.array[i];
                    // result=minusResult;
                }
                else if(this.choosedAction == 'x'){
                    result*=this.array[i] 
                }
                else if(this.choosedAction == '/'){
                    result/=this.array[i];
                }
                else if(this.choosedAction == '%'){
                   result*=this.array[i] / 100;
              }
              }

              this.input.value=result
              this.array=[];
          })
    }
    
}
const calculator=new Calculator({

})

