interface TypographyProps {
  text: string;
}

const Typography: React.FC<TypographyProps> = ({ text }) => {
  const renderListItems = (items: string[]) => {
    return (
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    );
  };

  const renderContent = () => {
    const paragraphs = text.split("\n");
    const content: JSX.Element[] = [];
    let currentList: string[] = [];

    paragraphs.forEach((paragraph) => {
      if (/^\.\s/.test(paragraph)) {
        // This is a numbered list item
        currentList.push(paragraph.replace(/^(\d+)\.\s/, ""));
      } else {
        // This is a paragraph
        if (currentList.length > 0) {
          // Finish previous list if exists
          content.push(renderListItems(currentList));
          currentList = [];
        }
        content.push(<p key={content.length}>{paragraph}</p>);
      }
    });

    // Add the last list if exists
    if (currentList.length > 0) {
      content.push(renderListItems(currentList));
    }

    return content;
  };

  return <div>{renderContent()}</div>;
};

export default Typography;
