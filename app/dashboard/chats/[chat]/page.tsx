import ChatPrompt from "@/components/chatPrompt";

export default function ChatPage({ params }: { params: { chat: string } }) {
  const chatId = params.chat;
  return (
    <div className="relative flex h-full flex-col items-center">
      <div className="flex w-full flex-1 justify-center overflow-scroll">
        <div className="flex w-1/2 flex-col gap-5">
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <div className="p-2">Test Message</div>
          <div className="max-w-[80%] self-end rounded-[20px] bg-[#2c2937] p-2">
            Test Message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit nulla quos velit ex iusto quidem libero
            quibusdam ea et, vel sed perspiciatis? Sunt quaerat quos nemo alias,
            asperiores enim. Officiis!
          </div>
          <ChatPrompt />
        </div>
      </div>
    </div>
  );
}
