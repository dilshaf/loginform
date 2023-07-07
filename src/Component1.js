function Component1(pros){
    console.log(pros);
    console.log(pros.title);
    console.log(pros.name);console.log(pros.name1);
    return(
        <>
        <h1>Number  {pros.title} </h1>
        <h1>First Name  {pros.name} </h1>
        <h1>Second Name  {pros.name1} </h1>
        </>
    )
}

export default Component1;