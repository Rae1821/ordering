import Modal from '@/components/modal/Modal';

export default function Page() {
  return (
    <Modal>
      <div className="flex-1 flex justify-center items-center bg-white h-[80vh] md:h-[50vh] flex-col p-4 rounded-2xl shadow-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          className="w-36 h-36"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
            clipRule="evenodd"
          />
        </svg>

        <div className="text-3xl">Failure</div>
      </div>
    </Modal>
  );
}
