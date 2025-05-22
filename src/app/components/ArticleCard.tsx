type Props = {
    title: string;
    description: string;
    date: string;
  };
  
  export default function ArticleCard({ title, description, date }: Props) {
    return (
      <article className="bg-white p-6 shadow rounded">
        <h2 className="text-2xl font-bold">{title}</h2>
        <h5 className="text-sm text-gray-500 mt-1">{description}, {date}</h5>
        <div className="bg-gray-300 h-48 mt-4 mb-2 flex items-center justify-center">Image</div>
        <p>Welcome to ArtSpace!</p>
        <p className="mt-2 text-sm text-gray-700">
          Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit...
        </p>
      </article>
    );
  }
  