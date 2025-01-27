import React, {useState} from "react";

/*
    New Entry Form Use States
 */

const NewEntryForm: React.FC = () => {
    const [tableName, setTableName] = useState("");
    const [productName, setProductName] = useState("");
    const [productSize, setProductSize] = useState("");
    const [manufacturer, setManufacturer] = useState("");
   // const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [upcCode, setUpcCode] = useState("");
    const [numberInCase, setNumerIncCase] = useState("");

    //Variables declared on entry submit

    /* const subtmitEntry = async () => {
        const product: ProductEntry = {
            tableName,
            productName,
            productSize,
            manufacturer,
            size,
            price,
            upcCode,
            numberInCase,
        };
     */

        //Try case for Error handling in case of failure.
        //Needs Error file implementation
    //New Product Entry Form
    return(
        <form>
            <div>
                <label>Table Name: </label>
                <input
                    type = "text"
                    value = {tableName}
                    onChange={(e) => setTableName(e.target.value)}
                />
            </div>
            <div>
                <label>Product Name: </label>
                <input
                    type = "text"
                    value = {productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div>
                <label>Product Size:</label>
                <input
                type = "text"
                value = {productSize}
                onChange = {(e) => setProductSize(e.target.value)}
                    />
            </div>
            <div>Manufacturer: </div>
            <div>Price: </div>
            <div>UPC: </div>
            <div>Number in case: </div>

        </form>
);
};
export default NewEntryForm;