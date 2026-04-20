import SampleAccess from './exercise03/FixedCode';
import BasicVerification from './exercise05/FormConfirm';
import EditableFile from './exercise07/EditableFile';
import SimpleForm from './exercise09/SimpleForm';
import AvaliableButton from './exercise11/AvaliableButton';

export default function Sheet04() {
    return (
        <>
            <h1>Hoja de ejercicios 04</h1>
            <h3>Corrección de código</h3>
            <SampleAccess />
            <h3>Envío con comprobación básica</h3>
            <BasicVerification />
            <h3>Ficha editable básica</h3>
            <EditableFile />
            <h3>Inscripción sencilla</h3>
            <SimpleForm />
            <h3>¿Botón disponible?</h3>
            <AvaliableButton />
        </>
    );
}
