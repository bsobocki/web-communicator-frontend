import { FormEvent, useState } from 'react';
import { MessageData } from '../Messages/Message';
import styles from './inputStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export interface MessageInputProps {
  onSendMessage: (message: MessageData) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    const newMessage: MessageData = {
      content: message,
      date: Date.now(),
      sender: 'user',
    };

    onSendMessage(newMessage);
    setMessage('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message here..."
        className={styles.inputBar}
      />
      <button type="submit" className={styles.sendButton}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
};

export default MessageInput;