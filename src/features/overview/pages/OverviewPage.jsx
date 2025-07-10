import NavBar from '../../../shared/Navbar/NavBar';
import Button from '../../../shared/Button/Button';
import PumpList from '../components/PumpList';
import Modal from '../../../shared/Modal/Modal';
import PumpForm from '../components/PumpForm';
import httpService from '../../../services/HttpService';
import { apiCall } from '../../../services/ApiWrapper';

import { useEffect, useState } from 'react';

const OverviewPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [pumps, setPumps] = useState([]);
    const [editingPump, setEditingPump] = useState(null);

    useEffect(() => {
        apiCall(httpService.getPumps).then(data => {
            setPumps(data);
        });
    }, []);


    const handleEdit = (pump) => {
        setEditingPump(pump);
        setModalOpen(true);
    };

    const handleAdd = () => {
        setEditingPump(null);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setEditingPump(null);
    };


    const handleFormSubmit = async (formData) => {
        if (editingPump) {
            await apiCall(httpService.editPump, editingPump.id, formData);
        } else {
            await apiCall(httpService.addPump, formData);
        }
        const updated = await apiCall(httpService.getPumps);
        setPumps(updated);
        setModalOpen(false);
        setEditingPump(null);
    };


    return (
        <div>
            <NavBar />
            <div>
                <Button onClick={handleAdd}>
                    + Add Pump
                </Button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search by name or area"
                />
                <select
                    value=""
                >
                    <option value="">All Types</option>
                    <option value="Centrifugal">Centrifugal</option>
                    <option value="Submersible">Submersible</option>
                </select>
            </div>
            <PumpList pumps={pumps} handleEdit={handleEdit} />

            <Modal isOpen={modalOpen} onClose={handleModalClose}>
                <PumpForm
                    pump={editingPump}
                    onSubmit={handleFormSubmit}
                    onCancel={handleModalClose}
                />
            </Modal>
        </div>

    );
}

export default OverviewPage;