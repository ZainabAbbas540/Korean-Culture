
document.addEventListener('DOMContentLoaded', () => {
  // set footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('primary-nav');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.style.display = expanded ? 'none' : 'flex';
    });
  }

  /*  Quiz Data  */
  const allQuizQuestions = [
    
    {
      id: 1,
      q: "What does '안녕하세요 (Annyeonghaseyo)' mean?",
      choices: ["Good night", "Hello", "Thank you", "I'm sorry"],
      answer: 1
    },
    {
      id: 2,
      q: "What does '감사합니다 (Gamsahamnida)' mean?",
      choices: ["I'm sorry", "I love you", "Thank you", "Goodbye"],
      answer: 2
    },
    {
      id: 3,
      q: "What does '사랑해요 (Saranghaeyo)' mean?",
      choices: ["I love you", "See you later", "Excuse me", "I'm hungry"],
      answer: 0
    },
    {
      id: 4,
      q: "What does '미안해요 (Mianhaeyo)' mean?",
      choices: ["I'm sorry", "Hello", "Good night", "Thank you"],
      answer: 0
    },
    {
      id: 5,
      q: "What does '잘 자요 (Jal jayo)' mean?",
      choices: ["Wake up!", "Good night", "Good morning", "Take care"],
      answer: 1
    },
    
    {
      id: 6,
      q: "What does '네 (Ne)' mean?",
      choices: ["No", "Maybe", "Yes", "Okay"],
      answer: 2
    },
    {
      id: 7,
      q: "What does '아니요 (Aniyo)' mean?",
      choices: ["No", "Yes", "Please", "Excuse me"],
      answer: 0
    },
    {
      id: 8,
      q: "What does '주세요 (Juseyo)' mean?",
      choices: ["How much is it?", "Please give me...", "Where is it?", "I don't know"],
      answer: 1
    },
    {
      id: 9,
      q: "What does '얼마예요? (Eolmayeyo?)' mean?",
      choices: ["What is this?", "How much is it?", "Is it spicy?", "I'll have this"],
      answer: 1
    },
    {
      id: 10,
      q: "What does '맛있어요 (Masisseoyo)' mean?",
      choices: ["It's spicy", "I'm full", "It's delicious", "I don't like it"],
      answer: 2
    },
    {
      id: 11,
      q: "What does '도와주세요 (Dowajuseyo)' mean?",
      choices: ["Help me", "Wait a moment", "I'm lost", "I'm okay"],
      answer: 0
    },
    {
      id: 12,
      q: "What does '괜찮아요 (Gwaenchanayo)' mean?",
      choices: ["It's okay / I'm okay", "No, thank you", "I'm not sure", "Please hurry"],
      answer: 0
    },
    {
      id: 13,
      q: "What does '화장실 어디예요? (Hwajangsil eodiyeyo?)' mean?",
      choices: ["Where is the exit?", "Where is the subway?", "Where is the bathroom?", "Where is the hospital?"],
      answer: 2
    },
    {
      id: 14,
      q: "What does '안녕히 가세요 (Annyeonghi gaseyo)' mean?",
      choices: ["Goodbye (to someone staying)", "Hello (on the phone)", "Welcome", "Goodbye (to someone leaving)"],
      answer: 3
    },
    {
      id: 15,
      q: "What does '만나서 반가워요 (Mannaseo bangawoyo)' mean?",
      choices: ["My name is...", "Nice to meet you", "How are you?", "Have a good day"],
      answer: 1
    },
    {
      id: 16,
      q: "What does '잘 먹겠습니다 (Jal meokgetseumnida)' mean?",
      choices: ["It was a good meal", "I will eat well (before meal)", "I'm not hungry", "Let's eat together"],
      answer: 1
    },
    {
      id: 17,
      q: "What does '실례합니다 (Sillyehamnida)' mean?",
      choices: ["Excuse me", "You're welcome", "I understand", "Please say it again"],
      answer: 0
    },
    {
      id: 18,
      q: "What does '몰라요 (Mollayo)' mean?",
      choices: ["I know", "I think so", "I don't know", "I forgot"],
      answer: 2
    },
    {
      id: 19,
      q: "What does '천천히 말해주세요 (Cheoncheonhi malhaejuseyo)' mean?",
      choices: ["Please write it down", "Please speak slowly", "Please repeat that", "Please help me"],
      answer: 1
    },
    {
      id: 20,
      q: "What does '물 좀 주세요 (Mul jom juseyo)' mean?",
      choices: ["Please give me the bill", "Please give me a menu", "Please give me some water", "Please make it less spicy"],
      answer: 2
    },
    {
      id: 21,
      q: "What does '이거 뭐예요? (Igeo mwoyeyo?)' mean?",
      choices: ["Who is this?", "Where is this?", "What is this?", "Why is this?"],
      answer: 2
    },
    {
      id: 22,
      q: "What does '배고파요 (Baegopayo)' mean?",
      choices: ["I'm thirsty", "I'm hungry", "I'm tired", "I'm full"],
      answer: 1
    },
    {
      id: 23,
      q: "What does '배불러요 (Baebulleoyo)' mean?",
      choices: ["I'm full", "I'm hungry", "I'm sick", "I'm happy"],
      answer: 0
    },
    {
      id: 24,
      q: "What does '진짜요? (Jinjjayo?)' mean?",
      choices: ["Why?", "When?", "How?", "Really?"],
      answer: 3
    },
    {
      id: 25,
      q: "What does '천만에요 (Cheonmaneyo)' mean?",
      choices: ["You're welcome", "Thank you", "I'm sorry", "Congratulations"],
      answer: 0
    },
    {
      id: 26,
      q: "What does '어서 오세요 (Eoseo oseyo)' mean?",
      choices: ["Goodbye", "Welcome", "Please sit down", "Come in"],
      answer: 1
    },
    {
      id: 27,
      q: "What does '안녕히 주무세요 (Annyeonghi jumuseyo)' mean?",
      choices: ["Good morning (Formal)", "Good night (Formal)", "Sweet dreams", "Wake up"],
      answer: 1
    },
    {
      id: 28,
      q: "What does '잘 먹었습니다 (Jal meogeotseumnida)' mean?",
      choices: ["This is delicious", "Let's eat!", "I have eaten well (after meal)", "I will eat well"],
      answer: 2
    },
    {
      id: 29,
      q: "What does '수고하세요 (Sugohaseyo)' mean?",
      choices: ["You did a great job", "Keep up the good work", "Let's work together", "Thank you for your help"],
      answer: 1
    },
    {
      id: 30,
      q: "What does '잠시만요 (Jamsimanyo)' mean?",
      choices: ["Hurry up", "Just a moment / Excuse me", "I'm busy now", "What time is it?"],
      answer: 1
    },
    {
      id: 31,
      q: "What does '이해가 안 돼요 (Ihaega an dwaeyo)' mean?",
      choices: ["I understand perfectly", "I don't know", "I don't understand", "I forgot"],
      answer: 2
    },
    {
      id: 32,
      q: "What does '다시 말해주세요 (Dasi malhaejuseyo)' mean?",
      choices: ["Please speak louder", "Please speak slowly", "Please write it down", "Please say it again"],
      answer: 3
    },
    {
      id: 33,
      q: "What does '영어 할 수 있어요? (Yeongeo hal su isseoyo?)' mean?",
      choices: ["Do you teach English?", "Can you speak English?", "Do you like English?", "Is this in English?"],
      answer: 1
    },
    {
      id: 34,
      q: "What does '이름이 뭐예요? (Ireumi mwoyeyo?)' mean?",
      choices: ["Where are you from?", "How old are you?", "What is your name?", "What is your job?"],
      answer: 2
    },
    {
      id: 35,
      q: "What does '어디에서 왔어요? (Eodieseo wasseoyo?)' mean?",
      choices: ["Where do you live?", "Where are you from?", "Where are you going?", "Where is this place?"],
      answer: 1
    },
    {
      id: 36,
      q: "What does '생일 축하해요 (Saengil chukahaeyo)' mean?",
      choices: ["Happy New Year", "Merry Christmas", "Congratulations", "Happy Birthday"],
      answer: 3
    },
    {
      id: 37,
      q: "What does '조심하세요 (Josimhaseyo)' mean?",
      choices: ["Don't worry", "Good luck", "Be careful / Take care", "Cheer up"],
      answer: 2
    },
    {
      id: 38,
      q: "What does '걱정하지 마세요 (Geokjeonghaji maseyo)' mean?",
      choices: ["I'm not worried", "Don't worry", "Please be careful", "It's okay"],
      answer: 1
    },
    {
      id: 39,
      q: "What does '보고 싶어요 (Bogo sipeoyo)' mean?",
      choices: ["I can see it", "I want to see a movie", "I miss you", "I like you"],
      answer: 2
    },
    {
      id: 40,
      q: "What does '화이팅! (Hwaiting!)' mean?",
      choices: ["Stop fighting", "Let's fight", "Fighting! (A cheer of support)", "I won"],
      answer: 2
    },
    {
      id: 41,
      q: "What does '피곤해요 (Pigonhaeyo)' mean?",
      choices: ["I'm sick", "I'm tired", "I'm busy", "I'm happy"],
      answer: 1
    },
    {
      id: 42,
      q: "What does '재미있어요 (Jaemiisseoyo)' mean?",
      choices: ["It's boring", "It's difficult", "It's fun/interesting", "It's easy"],
      answer: 2
    },
    {
      id: 43,
      q: "What does '좋아요 (Joayo)' mean?",
      choices: ["I hate it", "It's bad", "It's okay", "It's good / I like it"],
      answer: 3
    },
    {
      id: 44,
      q: "What does '싫어요 (Sireoyo)' mean?",
      choices: ["I love it", "I don't like it / No", "I'm not sure", "Maybe"],
      answer: 1
    },
    {
      id: 45,
      q: "What does '아파요 (Apayo)' mean?",
      choices: ["I'm happy", "I'm sleepy", "It hurts / I'm sick", "I'm fine"],
      answer: 2
    },
    {
      id: 46,
      q: "What does '왼쪽 / 오른쪽 (Oenjjok / Oreunjjok)' mean?",
      choices: ["Up / Down", "Left / Right", "Straight / Back", "Here / There"],
      answer: 1
    },
    {
      id: 47,
      q: "What does '직진 (Jikjin)' mean?",
      choices: ["Turn left", "Turn right", "Stop", "Go straight"],
      answer: 3
    },
    {
      id: 48,
      q: "What does '입어봐도 돼요? (Ibeobwado dwaeyo?)' mean?",
      choices: ["Can I buy this?", "Can I try this on?", "Can I get a discount?", "Do you have a bigger size?"],
      answer: 1
    },
    {
      id: 49,
      q: "What does '깎아주세요 (Kkakka-juseyo)' mean?",
      choices: ["Please give me a bag", "I'll pay with cash", "Please give me a discount", "Please wrap it as a gift"],
      answer: 2
    },
    {
      id: 50,
      q: "What does '너무 비싸요 (Neomu bissayo)' mean?",
      choices: ["It's too cheap", "It's too big", "It's too expensive", "It's the perfect price"],
      answer: 2
    },
    {
      id: 51,
      q: "What does '계산서 주세요 (Gyesanseo juseyo)' mean?",
      choices: ["The menu, please", "More water, please", "Check/Bill, please", "This is delicious"],
      answer: 2
    },
    {
      id: 52,
      q: "What does '포장해주세요 (Pojanghaejuseyo)' mean?",
      choices: ["I will eat here", "Please pack it to-go", "One more, please", "I'd like to order now"],
      answer: 1
    },
    {
      id: 53,
      q: "What does '알겠습니다 (Algesseumnida)' mean?",
      choices: ["I don't know", "I have a question", "I understand / Noted", "I will try"],
      answer: 2
    },
    {
      id: 54,
      q: "What does '나중에 봐요 (Najunge bwayo)' mean?",
      choices: ["See you tomorrow", "See you soon", "See you later", "Goodbye forever"],
      answer: 2
    },
    {
      id: 55,
      q: "What does '오늘 날씨 어때요? (Oneul nalssi eottaeyo?)' mean?",
      choices: ["It's hot today", "Is it going to rain?", "How is the weather today?", "I like this weather"],
      answer: 2
    },
    {
      id: 56,
      q: "What does '지금 뭐 해요? (Jigeum mwo haeyo?)' mean?",
      choices: ["What did you do?", "What are you doing now?", "What will you do?", "What is your hobby?"],
      answer: 1
    },
    {
      id: 57,
      q: "What does '무슨 뜻이에요? (Museun tteusieyo?)' mean?",
      choices: ["Can you say that again?", "How do you spell that?", "What does this mean?", "I don't understand"],
      answer: 2
    },
    {
      id: 58,
      q: "What does '시간 있어요? (Sigan isseoyo?)' mean?",
      choices: ["What time is it?", "Do you have time?", "I don't have time", "Let's save time"],
      answer: 1
    },
    {
      id: 59,
      q: "What does '목말라요 (Mongmallayo)' mean?",
      choices: ["I'm hungry", "I'm tired", "I'm thirsty", "I'm sleepy"],
      answer: 2
    },
    {
      id: 60,
      q: "What does '메뉴 좀 주세요 (Menyu jom juseyo)' mean?",
      choices: ["The bill, please", "The menu, please", "Water, please", "This one, please"],
      answer: 1
    },
    {
      id: 61,
      q: "What does '새해 복 많이 받으세요 (Saehae bok mani badeuseyo)' mean?",
      choices: ["Merry Christmas", "Happy Birthday", "Happy New Year", "Happy Chuseok"],
      answer: 2
    },
    {
      id: 62,
      q: "What does '전화번호가 뭐예요? (Jeonhwabeonhoga mwoyeyo?)' mean?",
      choices: ["What's your address?", "What's your phone number?", "What's your name?", "Can I call you?"],
      answer: 1
    },
    {
      id: 63,
      q: "What does '여기 세워주세요 (Yeogi sewojuseyo)' mean?",
      choices: ["Please go faster", "Please turn right here", "Please stop here", "Please wait here"],
      answer: 2
    },
    {
      id: 64,
      q: "What does '지하철역이 어디예요? (Jihacheollyeogi eodiyeyo?)' mean?",
      choices: ["Where is the bus stop?", "Where is the airport?", "Where is the restroom?", "Where is the subway station?"],
      answer: 3
    },
    {
      id: 65,
      q: "What does '한국말 잘 못해요 (Hangungmal jal motaeyo)' mean?",
      choices: ["I speak Korean well", "I want to learn Korean", "I can't speak Korean well", "I am from Korea"],
      answer: 2
    },
    {
      id: 66,
        q: "What does '오랜만이에요 (Oraenmanieyo)' mean?",
        choices: ["See you soon", "Nice to meet you", "Long time no see", "How have you been?"],
        answer: 2
    },
    {
      id: 67,
        q: "What does '잘 지내세요? (Jal jinaeseyo?)' mean?",
        choices: ["How are you? / I hope you are well", "What are you doing?", "Where are you going?", "Have a good day"],
        answer: 0
    },
    {
      id: 68,
        q: "What does '지금 몇 시예요? (Jigeum myeot siyeyo?)' mean?",
        choices: ["Do you have time?", "What day is it?", "What time is it now?", "Is it late?"],
        answer: 2
    },
    {
      id: 69,
        q: "What does '다음에 봐요 (Daeume bwayo)' mean?",
        choices: ["See you soon", "See you next time", "See you tomorrow", "See you later"],
        answer: 1
    },
    {
      id: 70,
        q: "What does '물론이죠 (Mullonijo)' mean?",
        choices: ["Maybe", "I don't know", "Of course", "No way"],
        answer: 2
    },
    {
      id: 71,
        q: "What does '무슨 일이에요? (Museun irieyo?)' mean?",
        choices: ["What's your job?", "What's wrong? / What's the matter?", "What are you doing?", "What's that sound?"],
        answer: 1
    },
    {
      id: 72,
        q: "What does '최고예요 (Choegoyeyo)' mean?",
        choices: ["It's the worst", "It's average", "It's okay", "It's the best"],
        answer: 3
    },
    {
      id: 73,
        q: "What does '안 맵게 해주세요 (An maepge haejuseyo)' mean?",
        choices: ["Please make it spicier", "Please make it not spicy", "Please make it sweeter", "Please give me less"],
        answer: 1
    },
    {
      id: 74,
        q: "What does '도와줄까요? (Dowajulkkayo?)' mean?",
        choices: ["Do you need help?", "Please help me", "Shall I help you?", "I can help"],
        answer: 2
    },
    {
      id: 75,
        q: "What does '여기서 멀어요? (Yeogiseo meoreoyo?)' mean?",
        choices: ["Is it far from here?", "Is it close to here?", "How do I get there?", "Is this the right way?"],
        answer: 0
    }
  ];

  let quizQuestions = [];
  let current = 0;
  let userAnswers = [];

  // DOM refs
  const questionArea = document.getElementById('question-area');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const progressEl = document.getElementById('progress');
  const modal = document.getElementById('result-modal');
  const resultText = document.getElementById('result-text');
  const retryBtn = document.getElementById('retry-btn');
  const closeBtn = document.getElementById('close-btn');

  if (!questionArea) return;

  // Function to get random questions
  function setupQuiz() {
    // Shuffle all questions and pick the first 5
    const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random());
    quizQuestions = shuffled.slice(0, 5);
    userAnswers = new Array(quizQuestions.length).fill(null);
    current = 0;
  }
  
  // render question
  function renderQuestion(index) {
    const q = quizQuestions[index];
    questionArea.innerHTML = '';

    const qTitle = document.createElement('div');
    qTitle.className = 'q-title';
    qTitle.innerHTML = `<strong>Q${index + 1}.</strong> ${q.q}`;
    questionArea.appendChild(qTitle);

    const choicesWrap = document.createElement('div');
    choicesWrap.className = 'choices-wrap';
    choicesWrap.setAttribute('role', 'radiogroup');
    q.choices.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.type = 'button';
      btn.textContent = c;
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', String(userAnswers[index] === i));
      btn.dataset.choice = i;
      btn.addEventListener('click', () => {
        userAnswers[index] = i;
        // update UI for choices
        Array.from(choicesWrap.children).forEach(ch => ch.setAttribute('aria-checked', 'false'));
        btn.setAttribute('aria-checked', 'true');
      });
      choicesWrap.appendChild(btn);
    });

    questionArea.appendChild(choicesWrap);

    // update controls
    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === quizQuestions.length - 1 ? 'Submit' : 'Next';

    // progress bar
    const pct = Math.round(((index) / (quizQuestions.length)) * 100);
    progressEl.setAttribute('aria-hidden', 'false');
 
    let bar = progressEl.querySelector('.bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'bar';
      progressEl.appendChild(bar);
    }
    bar.style.width = `${pct}%`;
  }

nextBtn.addEventListener('click', () => {
    if (current < quizQuestions.length - 1) {
      current++;
      renderQuestion(current);
    } else {
      // submit score
      const unanswered = userAnswers.some(a => a === null);
      if (unanswered) {
        // gentle warning
        if (!confirm('You have unanswered questions. Submit anyway?')) return;
      }

      // Set progress to 100% upon submission
      const bar = progressEl.querySelector('.bar');
      if (bar) {
        bar.style.width = '100%';
      }
     

      const score = userAnswers.reduce((acc, ans, idx) => {
        if (ans === quizQuestions[idx].answer) return acc + 1;
        return acc;
      }, 0);
      showResult(score);
    }
  });
  prevBtn.addEventListener('click', () => {
    if (current > 0) { current--; renderQuestion(current); }
  });

  // show result model
  function showResult(score) {
    resultText.textContent = `You scored ${score} out of ${quizQuestions.length}.`;
    // add a small message
    const pct = Math.round((score / quizQuestions.length) * 100);
    const msg = pct === 100 ? 'Perfect! 🎉 Great memory.' :
                pct >= 60 ? 'Well done — good job!' :
                'Nice try — review the Hangul section and try again.';
    const extra = document.createElement('p');
    extra.style.marginTop = '8px';
    extra.style.color = 'var(--muted)';
    extra.id = 'result-extra';
    extra.textContent = msg;
    // clear previous, if exists
    const existing = document.getElementById('result-extra');
    if (existing) existing.remove();
    resultText.parentNode.appendChild(extra);

    // open modal
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
  }

  // close modal
  closeBtn.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
  });
  
  function startNewQuiz() {
    setupQuiz();
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    renderQuestion(0);
  }

  
  retryBtn.addEventListener('click', startNewQuiz);

  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.setAttribute('aria-hidden', 'true');
      modal.style.display = 'none';
    }
  });

 
  startNewQuiz();
});



document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  // keyboard accessibility
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      card.classList.toggle('flipped');
    }
  });
});