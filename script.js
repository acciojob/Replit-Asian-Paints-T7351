    const change = document.querySelector('#change_button');
    const reset = document.querySelector('#Reset');

    const container = document.querySelector(".grid-container");
    for (let i = 1; i <= 9; i++) { 
        const div = document.createElement("div");
        div.className = "grid-item";                 
        div.id = i;                                  
        div.textContent = i;                         
        container.appendChild(div);
    }

    change.addEventListener(('click'), (e)=>{
        e.preventDefault();
        const block = document.querySelector('#block_id').value;
        const color = document.querySelector('#colour_id').value;

        document.querySelectorAll('.grid-item').forEach(item=>{
            item.style.backgroundColor = "transparent";
        });
        const selected = document.getElementById(block);
        if(selected){
            selected.style.backgroundColor = color;
        }
    })

    reset.addEventListener(('click'), ()=>{
        document.querySelectorAll('.grid-item').forEach(item=>{
            item.style.backgroundColor="grey";
        });
    })
