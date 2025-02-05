import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TrendsList from "./components/TrendsList";
import TopicsList from "./components/TopicsList";
import { BlogProvider } from "./shared/BlogContext";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import ArticleList from "./components/ArticleList";
import { useBlogModal } from "./hooks/useBlogModal";

const App = () => {
  const {
    isModalOpen,
    editingBlog,
    openModalForNewBlog,
    openModalForEdit,
    handleCloseModal
  } = useBlogModal();

  return (
    <BlogProvider>
      <Navigation />
      <div className="flex justify-center">
        <section className="mx-auto p-6">
          <div>
            <button
              onClick={openModalForNewBlog}
              className="ml-[7rem] bg-black flex justify-center
               items-center text-white px-4 py-2 rounded mb-4"
            >
              Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
            </button>
            <ArticleList onEdit={openModalForEdit} />
            {isModalOpen && (
              <Modal onClose={handleCloseModal}>
                <BlogForm existingBlog={editingBlog} onClose={handleCloseModal} />
              </Modal>
            )}
          </div>
        </section>
        <div className="w-[30%]">
          <PeopleToFollow />
          <TrendsList />
          <TopicsList />
        </div>
      </div>
    </BlogProvider>
  );
};

export default App;
