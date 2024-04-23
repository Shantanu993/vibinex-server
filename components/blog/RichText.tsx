import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichTextProps {
  data: {
	body: string;
  };
}

const RichText: React.FC<RichTextProps> = ({ data }: RichTextProps	) => {
  return (
	<section className="rich-text py-6 dark:bg-black dark:text-gray-50 ">
		<Markdown remarkPlugins={[remarkGfm]}>
			{data.body}
		</Markdown>
	</section>
  );
}

export default RichText;