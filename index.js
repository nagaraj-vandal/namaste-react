// heading = document.createElement("h2")
// heading.innerText = "Wassup boeing ppl"
// root = document.getElementById("root")
// root.appendChild(heading)

// heading = React.createElement("h2" , {} , "Wassup react learning boeing ppl")
// root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

{/* <div id="parentDiv"> 
    <h1>Im a parent div</h1>
    <h2>Im a SIBLING div</h2>
</div> */}

parent = React.createElement("div" , {id : "parentDiv"} ,  
                             [React.createElement("h1" , {} , "Im inside parent div") , React.createElement("h2" , {} , "Im a SIBLING div")])
console.log(parent)
root = ReactDOM.createRoot(document.getElementById("root"))  
console.log(root)
console.log(root.render(parent))





