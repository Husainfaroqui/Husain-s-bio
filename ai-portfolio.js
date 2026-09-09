(() => {
  if (document.getElementById("husain-ai")) return;

  const section = document.createElement("section");
  section.id = "husain-ai";
  section.className = "hp-ai-section";

  section.innerHTML = `
    <div class="hp-ai-wrap">
      <div class="hp-ai-heading">
        <div class="hp-ai-eyebrow">HUSAIN'S AI</div>
        <h2>Ask <span>Husain's AI</span></h2>
        <p>An AI assistant for science, medicine, technology and curious minds.</p>
      </div>

      <div class="hp-ai-card">
        <div class="hp-ai-top">
          <div>
            <strong>HUSAIN'S AI</strong>
            <small>AI SCIENCE &amp; RESEARCH ASSISTANT</small>
          </div>
          <button id="hp-ai-clear" type="button">Clear</button>
        </div>

        <div id="hp-ai-messages" class="hp-ai-messages">
          <div class="hp-ai-message hp-ai-bot">
            <div class="hp-ai-avatar">H</div>
            <div class="hp-ai-bubble">
              <div class="hp-ai-name">HUSAIN'S AI</div>
              <p>Hello. Ask me anything about science, biology, medicine, AI, technology or research.</p>
            </div>
          </div>
        </div>

        <div class="hp-ai-suggestions">
          <button type="button">Explain DNA replication</button>
          <button type="button">How does the human heart work?</button>
          <button type="button">What is artificial intelligence?</button>
          <button type="button">How can AI help medicine?</button>
        </div>

        <form id="hp-ai-form" class="hp-ai-input">
          <button id="hp-ai-mic" type="button" aria-label="Voice input">🎙</button>
          <input
            id="hp-ai-text"
            type="text"
            placeholder="Ask Husain's AI..."
            autocomplete="off"
          />
          <button id="hp-ai-send" type="submit" aria-label="Send">➤</button>
        </form>

        <div class="hp-ai-note">
          Educational AI • Not a substitute for professional medical advice
        </div>
      </div>
    </div>
  `;

  const style = document.createElement("style");
  style.textContent = `
    .hp-ai-section {
      position: relative;
      padding: 110px 20px;
      background: transparent;
      color: var(--text-primary, #e8edf5);
      overflow: hidden;
    }

    .hp-ai-wrap {
      width: min(1000px, 100%);
      margin: auto;
    }

    .hp-ai-heading {
      text-align: center;
      margin-bottom: 45px;
    }

    .hp-ai-eyebrow {
      font-family: var(--mono, "DM Mono", monospace);
      font-size: 12px;
      letter-spacing: 4px;
      color: var(--cyan, #00e5ff);
      margin-bottom: 15px;
    }

    .hp-ai-heading h2 {
      margin: 0;
      font-size: clamp(42px, 7vw, 76px);
      line-height: 1;
      font-weight: 500;
    }

    .hp-ai-heading h2 span {
      background: linear-gradient(90deg, #7b6cff, #00e5ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .hp-ai-heading p {
      max-width: 620px;
      margin: 22px auto 0;
      color: var(--text-secondary, #7e92b0);
      line-height: 1.7;
      font-size: 15px;
    }

    .hp-ai-card {
      border: 1px solid rgba(123,108,255,.22);
      background: rgba(8,12,22,.72);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 30px 100px rgba(0,0,0,.35);
    }

    .hp-ai-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      border-bottom: 1px solid rgba(255,255,255,.07);
    }

    .hp-ai-top strong {
      display: block;
      font-family: "DM Mono", monospace;
      font-size: 13px;
      letter-spacing: 2px;
    }

    .hp-ai-top small {
      display: block;
      margin-top: 5px;
      color: var(--text-muted, #3a4d6a);
      font-size: 9px;
      letter-spacing: 1.5px;
    }

    #hp-ai-clear {
      border: 1px solid rgba(255,255,255,.1);
      background: rgba(255,255,255,.03);
      color: var(--text-secondary, #7e92b0);
      padding: 8px 13px;
      border-radius: 9px;
      cursor: pointer;
    }

    .hp-ai-messages {
      min-height: 390px;
      max-height: 540px;
      overflow-y: auto;
      padding: 28px 24px;
    }

    .hp-ai-message {
      display: flex;
      gap: 12px;
      margin-bottom: 22px;
    }

    .hp-ai-user {
      justify-content: flex-end;
    }

    .hp-ai-avatar {
      flex: 0 0 34px;
      width: 34px;
      height: 34px;
      border-radius: 10px;
      display: grid;
      place-items: center;
      background: linear-gradient(135deg, #7b6cff, #00e5ff);
      color: white;
      font-family: "DM Mono", monospace;
      font-size: 12px;
      font-weight: bold;
    }

    .hp-ai-user .hp-ai-avatar {
      order: 2;
    }

    .hp-ai-bubble {
      max-width: min(760px, 82%);
      padding: 13px 16px;
      border-radius: 15px;
      background: rgba(255,255,255,.035);
      border: 1px solid rgba(255,255,255,.06);
    }

    .hp-ai-user .hp-ai-bubble {
      background: rgba(123,108,255,.12);
      border-color: rgba(123,108,255,.2);
    }

    .hp-ai-name {
      font-family: "DM Mono", monospace;
      font-size: 9px;
      letter-spacing: 1.5px;
      color: var(--cyan, #00e5ff);
      margin-bottom: 7px;
    }

    .hp-ai-bubble p {
      margin: 0;
      white-space: pre-wrap;
      line-height: 1.65;
      font-size: 14px;
      color: var(--text-primary, #e8edf5);
    }

    .hp-ai-suggestions {
      display: flex;
      gap: 8px;
      padding: 0 24px 18px;
      overflow-x: auto;
    }

    .hp-ai-suggestions button {
      white-space: nowrap;
      border: 1px solid rgba(123,108,255,.2);
      background: rgba(123,108,255,.05);
      color: var(--text-secondary, #7e92b0);
      border-radius: 999px;
      padding: 9px 13px;
      cursor: pointer;
      font-size: 11px;
    }

    .hp-ai-suggestions button:hover {
      color: white;
      border-color: rgba(0,229,255,.4);
    }

    .hp-ai-input {
      display: flex;
      gap: 9px;
      padding: 16px;
      border-top: 1px solid rgba(255,255,255,.07);
      background: rgba(0,0,0,.16);
    }

    .hp-ai-input input {
      min-width: 0;
      flex: 1;
      border: 1px solid rgba(255,255,255,.08);
      outline: none;
      border-radius: 12px;
      padding: 13px 15px;
      background: rgba(255,255,255,.035);
      color: white;
      font-size: 14px;
    }

    .hp-ai-input input:focus {
      border-color: rgba(123,108,255,.5);
    }

    .hp-ai-input button {
      width: 44px;
      min-width: 44px;
      border: 0;
      border-radius: 12px;
      background: rgba(123,108,255,.14);
      color: white;
      cursor: pointer;
      font-size: 17px;
    }

    #hp-ai-send {
      background: linear-gradient(135deg, #7b6cff, #4a9eff);
    }

    .hp-ai-note {
      text-align: center;
      padding: 0 15px 16px;
      color: var(--text-muted, #3a4d6a);
      font-size: 9px;
      letter-spacing: .5px;
    }

    @media (max-width: 600px) {
      .hp-ai-section {
        padding: 75px 12px;
      }

      .hp-ai-top {
        padding: 16px;
      }

      .hp-ai-messages {
        padding: 22px 14px;
      }

      .hp-ai-suggestions {
        padding-left: 14px;
        padding-right: 14px;
      }

      .hp-ai-bubble {
        max-width: 82%;
      }
    }
  `;

  document.head.appendChild(style);

  const target =
    document.querySelector("#about") ||
    document.querySelector("main") ||
    document.body;

target.parentNode.insertBefore(section, target);

  const messages = [];
  const messageBox = document.getElementById("hp-ai-messages");
  const input = document.getElementById("hp-ai-text");
  const form = document.getElementById("hp-ai-form");

  function addMessage(text, role) {
    const row = document.createElement("div");
    row.className =
      "hp-ai-message " +
      (role === "user" ? "hp-ai-user" : "hp-ai-bot");

    const avatar = document.createElement("div");
    avatar.className = "hp-ai-avatar";
    avatar.textContent = role === "user" ? "U" : "H";

    const bubble = document.createElement("div");
    bubble.className = "hp-ai-bubble";

    const name = document.createElement("div");
    name.className = "hp-ai-name";
    name.textContent = role === "user" ? "YOU" : "HUSAIN'S AI";

    const textElement = document.createElement("p");
    textElement.textContent = text;

    bubble.appendChild(name);
    bubble.appendChild(textElement);
    row.appendChild(avatar);
    row.appendChild(bubble);
    messageBox.appendChild(row);

    messageBox.scrollTop = messageBox.scrollHeight;
    return textElement;
  }

  function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findKnowledgeAnswer(question) {
  const database = window.HUSAIN_AI_KNOWLEDGE || [];

  if (!database.length) {
    return "My knowledge base is not loaded yet. Please refresh the page and try again.";
  }

  const q = normalizeText(question);

  let bestMatch = null;
  let bestScore = 0;

  for (const item of database) {
    for (const key of item.keys) {
      const k = normalizeText(key);

      if (q === k) {
        return item.answer;
      }

      if (q.includes(k)) {
        const score = 100 + k.length;

        if (score > bestScore) {
          bestScore = score;
          bestMatch = item;
        }

        continue;
      }

      const questionWords = q.split(" ").filter(word => word.length >= 2);
      const keyWords = k.split(" ").filter(word => word.length >= 2);

      let matchedWords = 0;

      for (const word of keyWords) {
        if (questionWords.includes(word)) {
          matchedWords++;
        }
      }

      if (matchedWords > 0) {
        const score =
          (matchedWords / keyWords.length) * 80 +
          matchedWords * 5;

        if (score > bestScore) {
          bestScore = score;
          bestMatch = item;
        }
      }
    }
  }

  if (bestMatch && bestScore >= 35) {
    return bestMatch.answer;
  }

  return "I don't have a prepared answer for that question yet. Try asking me about Biology, Chemistry, Physics, Medicine, AI, Technology, Research, or Husain.";
}

function askAI(question) {
  if (!question.trim()) return;

  input.value = "";

  addMessage(question, "user");

  messages.push({
    role: "user",
    content: question
  });

  const answer = findKnowledgeAnswer(question);

  setTimeout(() => {
    addMessage(answer, "assistant");

    messages.push({
      role: "assistant",
      content: answer
    });

    messageBox.scrollTop = messageBox.scrollHeight;
  }, 350);
}

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    askAI(input.value);
  });

  document.querySelectorAll(".hp-ai-suggestions button").forEach(button => {
    button.addEventListener("click", () => {
      askAI(button.textContent);
    });
  });

  document.getElementById("hp-ai-clear").addEventListener("click", () => {
    messages.length = 0;
    messageBox.innerHTML = "";
    addMessage(
      "Conversation cleared. What would you like to explore?",
      "assistant"
    );
  });

  const mic = document.getElementById("hp-ai-mic");

  if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;

    mic.addEventListener("click", () => {
      recognition.start();
      mic.textContent = "●";
    });

    recognition.onresult = event => {
      input.value = event.results[0][0].transcript;
      mic.textContent = "🎙";
      input.focus();
    };

    recognition.onerror = () => {
      mic.textContent = "🎙";
    };

    recognition.onend = () => {
      mic.textContent = "🎙";
    };
  } else {
    mic.style.display = "none";
  }
})();
(() => {
  const aiButton = document.createElement("button");

  aiButton.id = "floating-ai-button";
  aiButton.innerHTML = `
    <span class="floating-ai-icon">✦</span>
    <span class="floating-ai-label">Ask a Doubt</span>
  `;

  const style = document.createElement("style");

  style.textContent = `
    #floating-ai-button {
      position: fixed;
      right: 24px;
      bottom: 90px;
      z-index: 9996;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 15px;
      border: 1px solid rgba(0,229,255,.35);
      border-radius: 999px;
      background: rgba(5,10,18,.88);
      backdrop-filter: blur(18px);
      color: #00e5ff;
      cursor: pointer;
      box-shadow: 0 0 25px rgba(0,229,255,.12);
      transition: all .35s ease;
      font-family: var(--font-ui, sans-serif);
    }

    .floating-ai-icon {
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: linear-gradient(135deg,#7b6cff,#00e5ff);
      color: white;
      font-size: 16px;
      box-shadow: 0 0 18px rgba(0,229,255,.3);
    }

    .floating-ai-label {
      max-width: 0;
      overflow: hidden;
      white-space: nowrap;
      opacity: 0;
      font-size: 11px;
      letter-spacing: .12em;
      text-transform: uppercase;
      transition: all .35s ease;
    }

    #floating-ai-button:hover .floating-ai-label {
      max-width: 110px;
      opacity: 1;
    }

    #floating-ai-button:hover {
      transform: translateY(-4px);
      border-color: #00e5ff;
      box-shadow: 0 0 35px rgba(0,229,255,.25);
    }

    @media (max-width: 600px) {
      #floating-ai-button {
        right: 15px;
        bottom: 80px;
        padding: 10px;
      }

      .floating-ai-label {
        display: none;
      }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(aiButton);

  aiButton.addEventListener("click", () => {
    const aiSection = document.getElementById("husain-ai");

    if (aiSection) {
      aiSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      setTimeout(() => {
        const input = document.getElementById("hp-ai-text");
        if (input) input.focus();
      }, 700);
    }
  });
})();
