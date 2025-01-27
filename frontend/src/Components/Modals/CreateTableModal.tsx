/**
 * ATTN!!: FILE NEEDS USER PERMS SECTOR ADDED AND ERROR MESSAGE HANDLER INFO.
 *
 *
 * Create Table Modal.
 * Desc: This is the logic which handles all create table modal for products page when client needs to create a table.
 *
 * Files inherited:
 * - NewEntryForm
 * - BackendServices
 * - ProductsList
 * - ProductsPage
 */
import React, {useState} from "react";
import Modal from "react-modal";
import NewEntryForm from "./NewEntryForm";
//Back End Import Sect


//Create Table modal Function

const CreateTableModal: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [tableName, setTableName] = useState (" ");
    /**
     * Admin/User Access sector, Needs firebase/UserManage. for integration.
     *
     */

    //Submit Table Create Function

   /** const submitTableCreation = async () => {
            const tableConfig: TableConfig = {
                tableName,
                /**
                 * User based Access Handler
                 */
         //   };
            /**
             *  Error Message call Function()
             */
       // }
return(
    <>
        <button className="bg-green-600 hover:bg-green-400 text-white font-bold py-2.5
            px-5 border-b-4 border-green-800 hover:border-green-500 rounded" onClick={() => setModalIsOpen(true)}> Create Table</button>
        <Modal isOpen={modalIsOpen} onCloseReques={() => setModalIsOpen(false)}>
            <h3>Create New Table</h3>
            <div>
                <label> Table Name: </label>
                <input type = "text"
                       value={tableName}
                       onChange={(e) => setTableName(e.target.value)}
                       />
            </div>

            <div>
            { /*Section For UserPermissions such as Admin User*/}
            </div>
            {/* Table Creation Button */}
            <button  className="bg-red-600 hover:bg-red-400 text-white font-bold py-2.5
            px-5 border-b-4 border-red-800 hover:border-red-500 rounded" onClick = {() => setModalIsOpen(false)}> Cancel</button>
            <NewEntryForm/>
        </Modal>
    </>
);
};

export default CreateTableModal;