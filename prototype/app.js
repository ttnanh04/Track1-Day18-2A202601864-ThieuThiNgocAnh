// JavaScript logic for Day 18 Micro-prototypes (Thieu Thi Ngoc Anh)
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const optionViews = document.querySelectorAll('.option-view');
    const annoContents = document.querySelectorAll('.anno-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const option = btn.getAttribute('data-option');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            optionViews.forEach(view => view.classList.add('hidden'));
            document.getElementById(`option-${option.toLowerCase()}-view`).classList.remove('hidden');

            annoContents.forEach(anno => anno.classList.add('hidden'));
            document.getElementById(`anno-${option.toLowerCase()}`).classList.remove('hidden');
        });
    });

    // Option A
    const clickableKws = document.querySelectorAll('.clickable-kw');
    const optAQueryBtn = document.getElementById('opt-a-query-btn');
    const optAResultPanel = document.getElementById('opt-a-result');
    const closeOptABtn = document.getElementById('close-opt-a');
    const optAAttachBtn = document.getElementById('opt-a-attach-btn');
    const optACitationText = document.getElementById('opt-a-citation-text');
    const optANote = document.getElementById('opt-a-note');

    let selectedKw = null;

    const citationData = {
        'lr': `"Khi tốc độ học (Learning Rate - lr) được thiết lập quá lớn (ví dụ lr > 1.0), thuật toán Gradient Descent sẽ nhảy qua điểm cực tiểu của hàm mất mát (Loss Function), hiện tượng này gọi là Overshoot làm mô hình không thể hội tụ."`,
        'overshoot': `"Overshoot (vượt ngưỡng): Xảy ra khi độ dài bước nhảy gradient quá lớn so với độ dốc của bề mặt mất mát, làm giá trị loss dao động liên tục giữa 2 sườn đồi thay vì tiến về 0."`,
        'lr-small': `"Tốc độ học quá nhỏ (ví dụ lr = 0.00001): Thuật toán tiến triển cực kỳ chậm, tốn hàng triệu vòng lặp (epochs) và dễ bị kẹt tại các điểm cực tiểu cục bộ (Local Minima) hoặc điểm yên ngựa (Saddle Points)."`
    };

    clickableKws.forEach(kw => {
        kw.addEventListener('click', () => {
            clickableKws.forEach(k => k.classList.remove('selected'));
            kw.classList.add('selected');
            selectedKw = kw.getAttribute('data-kw');
        });
    });

    if (optAQueryBtn) {
        optAQueryBtn.addEventListener('click', () => {
            if (!selectedKw) {
                selectedKw = 'lr';
                if (clickableKws[0]) clickableKws[0].classList.add('selected');
            }
            if (optACitationText) optACitationText.innerHTML = citationData[selectedKw] || citationData['lr'];
            if (optAResultPanel) optAResultPanel.classList.remove('hidden');
        });
    }

    if (closeOptABtn) {
        closeOptABtn.addEventListener('click', () => {
            if (optAResultPanel) optAResultPanel.classList.add('hidden');
        });
    }

    if (optAAttachBtn) {
        optAAttachBtn.addEventListener('click', () => {
            const attachedSnippet = document.createElement('div');
            attachedSnippet.style.marginTop = '10px';
            attachedSnippet.style.padding = '8px 12px';
            attachedSnippet.style.background = 'rgba(56, 189, 248, 0.1)';
            attachedSnippet.style.borderLeft = '3px solid #38bdf8';
            attachedSnippet.style.borderRadius = '4px';
            attachedSnippet.style.fontSize = '0.85rem';
            attachedSnippet.innerHTML = `📌 <strong>Bối cảnh đính kèm:</strong> ${optACitationText.innerText}`;
            
            optANote.parentElement.appendChild(attachedSnippet);
            optAResultPanel.classList.add('hidden');
            alert('Đã đính kèm đoạn ngữ cảnh thành công vào ghi chú!');
        });
    }

    // Option B
    const acceptTagBtns = document.querySelectorAll('.accept-tag-btn');
    const editTagBtns = document.querySelectorAll('.edit-tag-btn');
    const rejectTagBtns = document.querySelectorAll('.reject-tag-btn');
    const attachedTagsList = document.getElementById('attached-tags-list');
    const noTagsText = document.querySelector('.no-tags-text');

    acceptTagBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tagId = btn.getAttribute('data-tag-id');
            const card = document.querySelector(`.draft-tag-card[data-tag-id="${tagId}"]`);
            const title = card.querySelector('.tag-title').innerText;

            if (noTagsText) noTagsText.style.display = 'none';

            const userTagPill = document.createElement('span');
            userTagPill.className = 'user-tag-item';
            userTagPill.setAttribute('data-tag-id', tagId);
            userTagPill.innerHTML = `${title} <button class="remove-tag-btn" data-tag-id="${tagId}">✕</button>`;

            attachedTagsList.appendChild(userTagPill);
            card.classList.add('accepted');

            userTagPill.querySelector('.remove-tag-btn').addEventListener('click', () => {
                userTagPill.remove();
                card.classList.remove('accepted');
                if (attachedTagsList.children.length === 1 && noTagsText) {
                    noTagsText.style.display = 'inline';
                }
            });
        });
    });

    editTagBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tagId = btn.getAttribute('data-tag-id');
            const card = document.querySelector(`.draft-tag-card[data-tag-id="${tagId}"]`);
            const titleEl = card.querySelector('.tag-title');
            const newTitle = prompt('Chỉnh sửa tên nhãn ngữ cảnh:', titleEl.innerText);
            if (newTitle && newTitle.trim() !== '') {
                titleEl.innerText = newTitle.trim();
            }
        });
    });

    rejectTagBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tagId = btn.getAttribute('data-tag-id');
            const card = document.querySelector(`.draft-tag-card[data-tag-id="${tagId}"]`);
            card.style.display = 'none';
        });
    });

    // Option C
    const optCAcceptBtn = document.getElementById('opt-c-accept-btn');
    const optCEditBtn = document.getElementById('opt-c-edit-btn');
    const optCRejectBtn = document.getElementById('opt-c-reject-btn');
    const synthesisCard = document.getElementById('ai-synthesis-card');
    const cardStatus = document.getElementById('card-status');

    if (optCAcceptBtn) {
        optCAcceptBtn.addEventListener('click', () => {
            synthesisCard.classList.add('accepted');
            if (cardStatus) {
                cardStatus.innerText = '✅ Đã lưu vào Note';
                cardStatus.style.background = 'rgba(52, 211, 153, 0.2)';
                cardStatus.style.color = '#34d399';
            }
            alert('Đã chấp nhận và lưu AI Synthesis Card vào ghi chú cá nhân!');
        });
    }

    if (optCEditBtn) {
        optCEditBtn.addEventListener('click', () => {
            const cardHeading = synthesisCard.querySelector('.card-heading');
            const newHeading = prompt('Sửa tiêu đề thẻ bối cảnh tổng hợp:', cardHeading.innerText);
            if (newHeading && newHeading.trim() !== '') {
                cardHeading.innerText = newHeading.trim();
            }
        });
    }

    if (optCRejectBtn) {
        optCRejectBtn.addEventListener('click', () => {
            synthesisCard.classList.add('dismissed');
            alert('Đã ẩn (Dismiss) AI Synthesis Card.');
        });
    }

    // Reset
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (optAResultPanel) optAResultPanel.classList.add('hidden');
            clickableKws.forEach(k => k.classList.remove('selected'));
            const addedSnippets = optANote.parentElement.querySelectorAll('div[style*="background"]');
            addedSnippets.forEach(s => s.remove());

            if (attachedTagsList) attachedTagsList.innerHTML = '<span class="no-tags-text text-sm text-gray">Chưa có nhãn ngữ cảnh nào được đính kèm.</span>';
            document.querySelectorAll('.draft-tag-card').forEach(card => {
                card.classList.remove('accepted');
                card.style.display = 'flex';
            });

            if (synthesisCard) synthesisCard.classList.remove('dismissed', 'accepted');
            if (cardStatus) {
                cardStatus.innerText = 'Chờ duyệt';
                cardStatus.style.background = 'rgba(255, 255, 255, 0.1)';
                cardStatus.style.color = '#94a3b8';
            }

            alert('Đã reset toàn bộ 3 options về trạng thái Context ban đầu!');
        });
    }
});
