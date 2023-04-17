import React, {useState} from 'react';

const Todolist = () => {
    const [arrayList,setarrayList] = useState([
        {
            descripcion: "Tarea 1"
        },
        {
            descripcion: "Tarea 2"
        }
    
    ])
    const[formData, setformData] = useState ({descripcion:''})
    const handleChange = ({target}) => {
    console.log(target)
    setformData({...formData, [target.name]:target.value})
    }
    const addTask = (e) => {
       e.preventDefault();
       const Tarea = formData.descripcion;
       console.log(Tarea)
       setarrayList({...arrayList,Tarea})
       setformData({descripcion:''})
    }
    return (
    <>
    <h1>ToDoList</h1>
    <form onSubmit={addTask}>
        <input type="text" placeholder="Descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} /> 
        <input type="submit" value="Agregar"/>
    </form>

    <div>
        {/* <h3>Listado</h3> */}
        {
            arrayList.map((tarea) =>
                <div key={tarea.descripcion}>
                    <span>{tarea.descripcion}</span>
                </div>
            )
        }
        <button>Eliminar las tareas</button>
    </div>
    </>
  );
}

export default Todolist;