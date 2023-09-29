import { useState } from "react";
import "./Style.css"; // Import CSS
import Background from "../assets/background1.svg"; // Import image
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Define an array of booked dates (you can hard-code them)
  const bookedDates = [
    new Date("2023-09-23"),
    new Date("2023-09-26"),
    new Date("2023-09-30"),
    // Add more booked dates as needed
  ];

  // Function to check if a date is booked
  const isDateBooked = (date) => {
    return bookedDates.some((bookedDate) => {
      // Compare the date part (ignore time) for the check
      return (
        date.getDate() === bookedDate.getDate() &&
        date.getMonth() === bookedDate.getMonth() &&
        date.getFullYear() === bookedDate.getFullYear()
      );
    });
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendEmail = () => {
    // Voeg de geselecteerde datum toe aan de e-mailinhoud
    const emailContent = {
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      selectedDate: selectedDate
        ? selectedDate.toDateString()
        : "Geen datum geselecteerd",
    };

    // Voor demonstratiedoeleinden, toon de e-mailinhoud in een alert
    alert(
      `E-mailinhoud:\n\nEmail: ${emailContent.email}\nMessage: ${emailContent.message}\nGeselecteerde Datum: ${emailContent.selectedDate}`
    );

    closeModal();
  };

  Modal.setAppElement("#root");

  return (
    <section className="Section1">
      <div className="inner">
        <img src={Background} alt="Logo" />
        <div className="description">
          <h1 className="textline">SPORT TIJDELIJK</h1>
          <h1>VOOR MAAR</h1>
          <h1>€200,99</h1>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => closeModal()}
            contentLabel="Send Email Modal"
            appElement={document.getElementById("root")}
            className="modal-content" // Add this class for styling
          >
            <div className="modal-header">
              <h2>Boek uw afspraak</h2>
              <button className="close-button" onClick={() => closeModal()}>
                Close
              </button>
            </div>
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Bericht:</label>
                <textarea id="message" rows="4" />
              </div>
              {/* Voeg de DatePicker-component toe */}
              <div className="form-group">
                <label htmlFor="date">Datum:</label>
                <DatePicker
                  id="date"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  // Set the excludeDates prop to disable booked dates
                  excludeDates={bookedDates}
                />
              </div>
              <button className="send-button" onClick={sendEmail}>
                Verstuur Email
              </button>
            </form>
          </Modal>
          <button className="button" onClick={openModal}>
            JOIN NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
