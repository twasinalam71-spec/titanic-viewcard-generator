        /* Titanic Character Priority & Smart Match Dictionary */
        const TITANIC_CHARACTERS = [
            { id: 1, name: "Jack Dawson", role: "Artist & Third Class Passenger", keywords: ["jack", "dawson", "dicaprio", "jack_dawson"] },
            { id: 2, name: "Rose DeWitt Bukater", role: "First Class Heiress", keywords: ["rose", "bukater", "dewitt", "rose_dewitt"] },
            { id: 3, name: "Cal Hockley", role: "First Class Heir", keywords: ["cal", "hockley", "caledon"] },
            { id: 4, name: "Captain Edward J. Smith", role: "Titanic Captain", keywords: ["captain", "smith", "edward"] },
            { id: 5, name: "Thomas Andrews", role: "Titanic Shipbuilder", keywords: ["andrews", "thomas", "shipbuilder"] },
            { id: 6, name: "Ruth DeWitt Bukater", role: "Rose's Mother", keywords: ["ruth", "mother"] },
            { id: 7, name: "Molly Brown", role: "The Unsinkable Molly", keywords: ["molly", "brown", "margaret"] },
            { id: 8, name: "First Officer Murdoch", role: "Officer of the Watch", keywords: ["murdoch", "officer", "william"] },
            { id: 9, name: "Tommy Ryan", role: "Third Class Friend", keywords: ["tommy", "ryan"] },
            { id: 10, name: "Fabrizio De Rossi", role: "Jack's Italian Friend", keywords: ["fabrizio", "rossi"] },
            { id: 11, name: "Old Rose Calvert", role: "101-Year-Old Rose", keywords: ["old_rose", "old-rose", "calvert", "lizzie"] },
            { id: 12, name: "J. Bruce Ismay", role: "White Star Line Director", keywords: ["ismay", "bruce", "director", "j_bruce_ismay"] }
        ];

        /* Memorial Dedication Texts */
        const DEDICATION = {
            ribbon: "Dedicated to the Titanic — the Ship, the Film, and the 1500 Souls Who Went Down with Her in the North Atlantic, 14 April 1912",
            footer: "In Memory of the 1500 who went down with the Titanic in the North Atlantic — April 15th, 1912"
        };

        /* Card Visual Template Definitions */
        const CARD_TEMPLATES = {
            dark_nautical: {
                name: 'Dark Nautical',
                frontBg: ['#0a1128', '#001f3f', '#050c1a'],
                frontBorderOuter: '#d97706',
                frontBorderOuterWidth: 12,
                frontBorderInner: '#f59e0b',
                frontBorderInnerWidth: 3,
                frontTitleColor: '#fef3c7',
                frontQuoteColor: '#f59e0b',
                frontSlotBg: '#0f172a',
                frontSlotFrame: '#d97706',
                frontSlotPlaceholder: '#1e293b',
                frontSlotPlaceholderText: '#64748b',
                frontPlaqueBg: '#1e293b',
                frontDivider: 'rgba(217, 119, 6, 0.6)',
                frontFooterPrimary: 'rgba(254, 243, 199, 0.7)',
                frontFooterSecondary: 'rgba(217, 119, 6, 0.7)',
                backBg: ['#fbf7ee', '#f4ece1', '#eae1d0'],
                backBorder: '#78350f',
                backBorderWidth: 8,
                backDivider: '#92400e',
                backHeaderColor: '#78350f',
                backMessageColor: '#1e1b4b',
                backSenderColor: '#78350f',
                backAddressLineColor: '#b45309',
                backStampBorder: '#78350f',
                backPostmarkColor: '#1e1b4b',
                combinedCutMark: '#d97706',
                combinedFoldBadge: '#d97706',
            },
            cream_elegant: {
                name: 'Cream Elegant',
                frontBg: ['#faf6ed', '#f5edd6', '#efe4cc'],
                frontBorderOuter: '#a0784a',
                frontBorderOuterWidth: 8,
                frontBorderInner: '#c9a84c',
                frontBorderInnerWidth: 2,
                frontTitleColor: '#4a3728',
                frontQuoteColor: '#8b6914',
                frontSlotBg: '#f0e6ce',
                frontSlotFrame: '#a0784a',
                frontSlotPlaceholder: '#e8dcc4',
                frontSlotPlaceholderText: '#9a8568',
                frontPlaqueBg: '#e8dcc4',
                frontDivider: 'rgba(160, 120, 74, 0.5)',
                frontFooterPrimary: 'rgba(74, 55, 40, 0.7)',
                frontFooterSecondary: 'rgba(160, 120, 74, 0.6)',
                backBg: ['#fdf9ef', '#f8f0dc', '#f2e8d0'],
                backBorder: '#8b6914',
                backBorderWidth: 6,
                backDivider: '#a0784a',
                backHeaderColor: '#6b4f2e',
                backMessageColor: '#3d2b1f',
                backSenderColor: '#8b6914',
                backAddressLineColor: '#a0784a',
                backStampBorder: '#8b6914',
                backPostmarkColor: '#3d2b1f',
                combinedCutMark: '#a0784a',
                combinedFoldBadge: '#a0784a',
            },
            minimal_ivory: {
                name: 'Minimal Ivory',
                frontBg: ['#fafaf8', '#f8f7f4', '#f5f4f0'],
                frontBorderOuter: '#999999',
                frontBorderOuterWidth: 2,
                frontBorderInner: '#cccccc',
                frontBorderInnerWidth: 1,
                frontTitleColor: '#1a1a1a',
                frontQuoteColor: '#666666',
                frontSlotBg: '#ffffff',
                frontSlotFrame: '#bbbbbb',
                frontSlotPlaceholder: '#f0f0ec',
                frontSlotPlaceholderText: '#aaaaaa',
                frontPlaqueBg: '#f8f7f4',
                frontDivider: 'rgba(153, 153, 153, 0.4)',
                frontFooterPrimary: 'rgba(26, 26, 26, 0.5)',
                frontFooterSecondary: 'rgba(153, 153, 153, 0.5)',
                backBg: ['#ffffff', '#fafafa', '#f7f7f7'],
                backBorder: '#cccccc',
                backBorderWidth: 3,
                backDivider: '#dddddd',
                backHeaderColor: '#555555',
                backMessageColor: '#222222',
                backSenderColor: '#777777',
                backAddressLineColor: '#aaaaaa',
                backStampBorder: '#cccccc',
                backPostmarkColor: '#444444',
                combinedCutMark: '#aaaaaa',
                combinedFoldBadge: '#aaaaaa',
            },
            minimal_dark: {
                name: 'Minimal Dark',
                frontBg: ['#121212', '#1a1a1a', '#0f0f0f'],
                frontBorderOuter: '#333333',
                frontBorderOuterWidth: 2,
                frontBorderInner: '#444444',
                frontBorderInnerWidth: 1,
                frontTitleColor: '#e0e0e0',
                frontQuoteColor: '#a0a0a0',
                frontSlotBg: '#1e1e1e',
                frontSlotFrame: '#333333',
                frontSlotPlaceholder: '#252525',
                frontSlotPlaceholderText: '#555555',
                frontPlaqueBg: '#1a1a1a',
                frontDivider: 'rgba(255, 255, 255, 0.1)',
                frontFooterPrimary: 'rgba(255, 255, 255, 0.3)',
                frontFooterSecondary: 'rgba(255, 255, 255, 0.2)',
                backBg: ['#121212', '#1a1a1a', '#0f0f0f'],
                backBorder: '#333333',
                backBorderWidth: 2,
                backDivider: '#444444',
                backHeaderColor: '#888888',
                backMessageColor: '#e0e0e0',
                backSenderColor: '#888888',
                backAddressLineColor: '#444444',
                backStampBorder: '#444444',
                backPostmarkColor: '#e0e0e0',
                combinedCutMark: '#444444',
                combinedFoldBadge: '#444444',
            },
        };

        /* Application Master State */
        const state = {
            activeTab: 'front', // 'front', 'back', 'combined'
            activeSlotId: 1,
            draggedSlotId: null,
            cardTemplate: localStorage.getItem('tvs-card-template') || 'dark_nautical',
            settings: {
                aspectRatio: '3:4', // '3:4' or '1:1'
                showNames: true,
                titleText: 'WHITE STAR SOUVENIR WORKS - SOUVENIR VIEWCARD',
                quoteText: '“I’m the king of the world!” — Jack Dawson',
            },
            postcard: {
                message: "Dearest Mother,\n\nWe have embarked on the most magnificent ship in human history! The grand staircase and state rooms are beyond words. Jack and I watched the sunset from the bow today.\n\nAll my love,\nRose",
                sender: "White Star Souvenir Works",
                recipient: "Mrs. Ruth DeWitt Bukater\n5th Avenue Mansions\nNew York City, N.Y.",
                stampStyle: "royal_1d",
                postmarkDate: "WHITE STAR SOUVENIR WORKS • 10 APR 1912 • SOUTHAMPTON"
            },
            print: {
                paperSize: 'a4',
                showCutMarks: true
            },
            slots: Array.from({ length: 12 }, (_, i) => ({
                id: i + 1,
                name: TITANIC_CHARACTERS[i].name,
                role: TITANIC_CHARACTERS[i].role,
                image: null, // HTML Image or Canvas SVG
                zoom: 1.0,
                panX: 0,
                panY: 0
            }))
        };

        function selectCardTemplate(key) {
            state.cardTemplate = key;
            localStorage.setItem('tvs-card-template', key);
            renderAll();
            document.getElementById('cardTemplateSelect').value = key;
        }

        /* Generate High Quality Vector Canvas Placeholders for Sample Titanic Cast */
        function createCastAvatarSVG(name, role, primaryBg, secondaryBg, iconSymbol) {
            const canvas = document.createElement('canvas');
            canvas.width = 400;
            canvas.height = 500;
            const ctx = canvas.getContext('2d');

            // Vignette Gradient Background
            const grad = ctx.createLinearGradient(0, 0, 400, 500);
            grad.addColorStop(0, primaryBg);
            grad.addColorStop(1, secondaryBg);
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 400, 500);

            // Vintage Frame Border inside avatar
            ctx.strokeStyle = 'rgba(217, 119, 6, 0.4)';
            ctx.lineWidth = 6;
            ctx.strokeRect(15, 15, 370, 470);

            // Stylized Center Portrait Badge
            ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
            ctx.beginPath();
            ctx.arc(200, 200, 110, 0, Math.PI * 2);
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#f59e0b';
            ctx.stroke();

            // Initial Letter Illustration (drawn with system fonts so placeholders never
            // depend on the FontAwesome CDN being loaded before the canvas renders)
            ctx.fillStyle = '#fef3c7';
            ctx.font = 'bold 110px "Playfair Display", Georgia, serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText((name && name[0]) || '?', 200, 200);

            // Name Banner inside Avatar
            ctx.fillStyle = '#d97706';
            ctx.font = 'bold 22px "Playfair Display", Georgia, serif';
            ctx.fillText(name, 200, 360);

            ctx.fillStyle = '#e2e8f0';
            ctx.font = '13px "Inter", sans-serif';
            ctx.fillText(role, 200, 395);

            const img = new Image();
            img.src = canvas.toDataURL();
            return img;
        }

        /* Populate Default Titanic Cast Assets */
        function loadSampleCast() {
            const styles = [
                { bg1: '#1e3a8a', bg2: '#0f172a', icon: '\uf007' }, // Jack (User/Artist)
                { bg1: '#831843', bg2: '#500724', icon: '\uf182' }, // Rose (Heiress)
                { bg1: '#451a03', bg2: '#1c1917', icon: '\uf0b1' }, // Cal (Briefcase/Wealth)
                { bg1: '#1e293b', bg2: '#020617', icon: '\uf52d' }, // Captain (Anchor)
                { bg1: '#14532d', bg2: '#052e16', icon: '\uf544' }, // Andrews (Drafting/Compass)
                { bg1: '#581c87', bg2: '#3b0764', icon: '\uf182' }, // Ruth (Lady)
                { bg1: '#7c2d12', bg2: '#431407', icon: '\uf06b' }, // Molly (Gift/Heart)
                { bg1: '#0f766e', bg2: '#115e59', icon: '\uf14e' }, // Murdoch (Compass)
                { bg1: '#365314', bg2: '#1a2e05', icon: '\uf0c0' }, // Tommy (People)
                { bg1: '#701a75', bg2: '#4a044e', icon: '\uf001' }, // Fabrizio (Music)
                { bg1: '#312e81', bg2: '#1e1b4b', icon: '\uf1da' }, // Old Rose (History)
                { bg1: '#3f3f46', bg2: '#18181b', icon: '\uf2b5' }  // J. Bruce Ismay (Business)
            ];

            TITANIC_CHARACTERS.forEach((char, idx) => {
                const s = styles[idx % styles.length];
                state.slots[idx].name = char.name;
                state.slots[idx].role = char.role;
                state.slots[idx].image = createCastAvatarSVG(char.name, char.role, s.bg1, s.bg2, s.icon);
                state.slots[idx].zoom = 1.0;
                state.slots[idx].panX = 0;
                state.slots[idx].panY = 0;
            });

            renderAll();
            showToast("Loaded 12 Character Cast Sample Placeholders!");
        }

        /* Handle Batch File Upload & Smart Auto-Placement */
        function handleFileSelect(e) {
            processFiles(e.target.files);
            e.target.value = ''; // allow re-selecting the same file
        }

        /* Shared upload handler for both the file browser and drag-and-drop */
        function processFiles(fileList) {
            const files = Array.from(fileList || []);
            if (!files || files.length === 0) return;

            const ALLOWED_MIME = new Set([
                'image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/bmp', 'image/svg+xml'
            ]);
            const bad = files.filter(f => !ALLOWED_MIME.has(f.type) && !/^(image\/jpeg|image\/png|image\/gif|image\/webp|image\/bmp|image\/svg\+xml)$/.test(f.type || ''));
            if (bad.length) {
                showToast(`Ignored ${bad.length} non-image file(s): ${bad.map(f => f.name).join(', ')}`);
            }
            const images = files.filter(f => ALLOWED_MIME.has(f.type) || /\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(f.name));
            if (!images.length) return;

            // The card has exactly 12 slots. Any extra files would silently
            // overwrite already-filled slots, so warn up front instead.
            let toProcess = images;
            if (images.length > 12) {
                toProcess = images.slice(0, 12);
                showToast(`Only the first 12 of ${images.length} images will be placed; the rest were ignored.`);
            }

            showToast(`Processing ${toProcess.length} uploaded image(s)...`);

            toProcess.forEach((file) => {
                const fileName = file.name.toLowerCase();
                let matchedCharIndex = -1;
                let bestKeywordLen = 0;

                // Match filename against character keyword dictionary (longest / most specific keyword wins)
                TITANIC_CHARACTERS.forEach((char, idx) => {
                    char.keywords.forEach(kw => {
                        if (kw.length > bestKeywordLen && fileName.includes(kw)) {
                            bestKeywordLen = kw.length;
                            matchedCharIndex = idx;
                        }
                    });
                });

                // Resolve the target slot synchronously so batch uploads never collide on the same empty slot
                let targetSlotIndex = matchedCharIndex;
                if (targetSlotIndex === -1) {
                    targetSlotIndex = state.slots.findIndex(s => !s.userUploaded);
                    if (targetSlotIndex === -1) targetSlotIndex = 0; // fallback overwrite
                }
                state.slots[targetSlotIndex].userUploaded = true; // reserve slot immediately

                // Read image file
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = new Image();
                    img.onload = () => {
                        // Clean filename into human readable title if unknown
                        let cleanedName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
                        cleanedName = cleanedName.replace(/\b\w/g, l => l.toUpperCase());

                        state.slots[targetSlotIndex].image = img;
                        if (matchedCharIndex !== -1) {
                            state.slots[targetSlotIndex].name = TITANIC_CHARACTERS[matchedCharIndex].name;
                        } else {
                            state.slots[targetSlotIndex].name = cleanedName;
                        }

                        renderAll();
                    };
                    img.onerror = () => {
                        // Never leave a silently broken slot; release the reservation
                        state.slots[targetSlotIndex].userUploaded = false;
                        showToast(`Could not load image: ${file.name}`);
                    };
                    img.src = event.target.result;
                };
                reader.onerror = () => {
                    state.slots[targetSlotIndex].userUploaded = false;
                    showToast(`Could not read file: ${file.name}`);
                };
                reader.readAsDataURL(file);
            });
        }

        /* Trigger Smart Sorting Algorithm */
        function triggerSmartSort() {
            // Remember the currently selected slot by object reference before
            // reordering, since sort() reassigns ids 1-12 by new position
            const activeSlot = state.slots.find(s => s.id === state.activeSlotId);

            // Sort existing slots based on TITANIC_CHARACTERS priority order
            state.slots.sort((a, b) => {
                const priorityA = TITANIC_CHARACTERS.findIndex(c => c.name.toLowerCase() === a.name.toLowerCase());
                const priorityB = TITANIC_CHARACTERS.findIndex(c => c.name.toLowerCase() === b.name.toLowerCase());
                const pA = priorityA === -1 ? 99 : priorityA;
                const pB = priorityB === -1 ? 99 : priorityB;
                return pA - pB;
            });

            // Re-assign IDs 1-12
            state.slots.forEach((slot, i) => slot.id = i + 1);

            // Keep the selected slot tracking in sync with the new ordering,
            // otherwise the pan/zoom controls silently operate on the wrong slot
            const reorderedActive = state.slots.find(s => s === activeSlot);
            if (reorderedActive) {
                state.activeSlotId = reorderedActive.id;
                document.getElementById('slotSelect').value = state.activeSlotId;
                loadSlotControls(state.activeSlotId);
            } else if (state.slots.length > 0) {
                state.activeSlotId = state.slots[0].id;
                document.getElementById('slotSelect').value = state.activeSlotId;
                loadSlotControls(state.activeSlotId);
            }
            renderAll();
            showToast("Smart character priority sorting applied!");
        }

        /* Render Drag-And-Drop Grid Slots on UI */
        function renderDragGrid() {
            const container = document.getElementById('dragGridContainer');
            container.innerHTML = '';

            state.slots.forEach((slot) => {
                const slotDiv = document.createElement('div');
                slotDiv.className = `relative rounded-xl p-1.5 border transition cursor-grab active:cursor-grabbing flex flex-col items-center justify-between focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${state.activeSlotId === slot.id ? 'border-amber-400 bg-amber-500/10' : 'border-slate-800 bg-slate-900/90 hover:border-slate-600'}`;
                slotDiv.draggable = true;
                slotDiv.tabIndex = 0;
                slotDiv.setAttribute('role', 'button');
                slotDiv.setAttribute('aria-label', `Slot #${slot.id}: ${slot.name}. Click or press Enter to edit, or use arrow keys to navigate.`);

                // Keyboard handling for grid slots
                slotDiv.onkeydown = (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        state.activeSlotId = slot.id;
                        document.getElementById('slotSelect').value = slot.id;
                        loadSlotControls(slot.id);
                        renderDragGrid();
                        e.preventDefault();
                    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                        const next = slotDiv.nextElementSibling;
                        if (next) next.focus();
                        e.preventDefault();
                    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                        const prev = slotDiv.previousElementSibling;
                        if (prev) prev.focus();
                        e.preventDefault();
                    }
                };

                // Drag Events
                slotDiv.ondragstart = (e) => handleDragStart(e, slot.id);
                slotDiv.ondragover = (e) => handleDragOver(e);
                slotDiv.ondragenter = (e) => slotDiv.classList.add('drag-over');
                slotDiv.ondragleave = (e) => slotDiv.classList.remove('drag-over');
                slotDiv.ondrop = (e) => handleDrop(e, slot.id, slotDiv);

                slotDiv.onclick = () => {
                    state.activeSlotId = slot.id;
                    document.getElementById('slotSelect').value = slot.id;
                    loadSlotControls(slot.id);
                    renderDragGrid();
                };

                // Badge Number
                const badge = `<span class="absolute top-1 left-1 bg-amber-500 text-slate-950 text-[10px] sm:text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">${slot.id}</span>`;

                // Preview Thumbnail
                let imgTag = `<div class="w-full h-16 bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 text-xs"><i class="fa-solid fa-image"></i></div>`;
                if (slot.image) {
                    imgTag = `<img src="${slot.image.src}" class="w-full h-16 object-cover rounded-lg border border-slate-700/60" width="64" height="64" alt="${slot.name || ('Character Slot ' + slot.id)}">`;
                }

                // Title
                const nameLabel = `<p class="text-[10px] sm:text-xs font-semibold text-slate-300 truncate w-full text-center mt-1">${slot.name}</p>`;

                slotDiv.innerHTML = `${badge}${imgTag}${nameLabel}`;
                container.appendChild(slotDiv);
            });

            // Populate Slot Select Dropdown
            const select = document.getElementById('slotSelect');
            select.innerHTML = '';
            state.slots.forEach(slot => {
                const opt = document.createElement('option');
                opt.value = slot.id;
                opt.textContent = `Slot #${slot.id}: ${slot.name}`;
                if (slot.id === state.activeSlotId) opt.selected = true;
                select.appendChild(opt);
            });

            // Update slot count badge
            const filled = state.slots.filter(s => s.image !== null).length;
            document.getElementById('filledCount').textContent = `${filled}/12`;
        }

        /* Drag and Drop Swapping Logic */
        function handleDragStart(e, slotId) {
            state.draggedSlotId = slotId;
            e.dataTransfer.effectAllowed = 'move';
        }

        function handleDragOver(e) {
            if (e.preventDefault) e.preventDefault();
            return false;
        }

        function handleDrop(e, targetSlotId, element) {
            if (e.stopPropagation) e.stopPropagation();
            element.classList.remove('drag-over');

            if (state.draggedSlotId && state.draggedSlotId !== targetSlotId) {
                const idx1 = state.slots.findIndex(s => s.id === state.draggedSlotId);
                const idx2 = state.slots.findIndex(s => s.id === targetSlotId);

                // Swap the two slot objects in place. Each keeps its own id, so
                // ids always stay aligned with their array position and the
                // active-slot tracking stays valid without extra bookkeeping.
                const temp = state.slots[idx1];
                state.slots[idx1] = state.slots[idx2];
                state.slots[idx2] = temp;

                renderAll();
                showToast(`Swapped Slot #${state.draggedSlotId} & Slot #${targetSlotId}`);
            }
            return false;
        }

        /* Load Selected Slot Data into Controls */
        function loadSlotControls(slotId) {
            state.activeSlotId = parseInt(slotId);
            const slot = state.slots.find(s => s.id === state.activeSlotId);
            if (!slot) return;

            // Guard against NaN/Infinity sneaking in from corrupted slot data
            slot.zoom = Number.isFinite(slot.zoom) ? slot.zoom : 1.0;
            slot.panX = Number.isFinite(slot.panX) ? slot.panX : 0;
            slot.panY = Number.isFinite(slot.panY) ? slot.panY : 0;

            document.getElementById('slotNameInput').value = slot.name;
            document.getElementById('zoomRange').value = slot.zoom;
            document.getElementById('zoomVal').textContent = `${slot.zoom.toFixed(2)}x`;
            document.getElementById('panXRange').value = slot.panX;
            document.getElementById('panXVal').textContent = `${slot.panX}px`;
            document.getElementById('panYRange').value = slot.panY;
            document.getElementById('panYVal').textContent = `${slot.panY}px`;
        }

        /* Update Active Slot Data from Controls */
        function updateActiveSlotData() {
            const slot = state.slots.find(s => s.id === state.activeSlotId);
            if (!slot) return;

            slot.name = document.getElementById('slotNameInput').value;
            slot.zoom = parseFloat(document.getElementById('zoomRange').value);
            slot.panX = parseInt(document.getElementById('panXRange').value);
            slot.panY = parseInt(document.getElementById('panYRange').value);

            document.getElementById('zoomVal').textContent = `${slot.zoom.toFixed(2)}x`;
            document.getElementById('panXVal').textContent = `${slot.panX}px`;
            document.getElementById('panYVal').textContent = `${slot.panY}px`;

            renderAll();
        }

        function resetZoomAndPan() {
            state.slots.forEach(s => {
                s.zoom = 1.0;
                s.panX = 0;
                s.panY = 0;
            });
            loadSlotControls(state.activeSlotId);
            renderAll();
            showToast("Reset all photo framing zoom & pan adjustments!");
        }

        /* Draw Deluxe 12-Card Front Viewcard Canvas */
        function renderFrontCanvas() {
            const canvas = document.getElementById('frontCanvas');
            const ctx = canvas.getContext('2d');
            const T = CARD_TEMPLATES[state.cardTemplate];

            // High Resolution Canvas Dimensions (e.g. 1200 x 1600 px)
            const isSquare = state.settings.aspectRatio === '1:1';
            const width = 1200;
            const height = isSquare ? 1200 : 1600;

            canvas.width = width;
            canvas.height = height;

            // Background Gradient
            const bgGrad = ctx.createLinearGradient(0, 0, width, height);
            T.frontBg.forEach((color, i) => bgGrad.addColorStop(i / (T.frontBg.length - 1), color));
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, width, height);

            // Double Border Frame
            ctx.strokeStyle = T.frontBorderOuter;
            ctx.lineWidth = T.frontBorderOuterWidth;
            ctx.strokeRect(20, 20, width - 40, height - 40);

            ctx.strokeStyle = T.frontBorderInner;
            ctx.lineWidth = T.frontBorderInnerWidth;
            ctx.strokeRect(32, 32, width - 64, height - 64);

            // Header Banner Title (auto-wrapped so long custom titles never overflow)
            ctx.fillStyle = T.frontTitleColor;
            ctx.font = 'bold 36px "Playfair Display", Georgia, serif';
            ctx.textAlign = 'center';
            const titleLines = wrapCanvasText(ctx, state.settings.titleText, width - 160);
            titleLines.forEach((line, i) => {
                ctx.fillText(line, width / 2, 85 + (i * 44));
            });

            // Subtitle / Quote (auto-wrapped)
            ctx.fillStyle = T.frontQuoteColor;
            ctx.font = 'italic 20px "Playfair Display", Georgia, serif';
            const quoteLines = wrapCanvasText(ctx, state.settings.quoteText, width - 160);
            const quoteStartY = 85 + (titleLines.length * 44) + 10;
            quoteLines.forEach((line, i) => {
                ctx.fillText(line, width / 2, quoteStartY + (i * 28));
            });

            // Decorative Divider Line sits below the wrapped header block
            const dividerY = quoteStartY + (quoteLines.length * 28) + 10;

            // Decorative Divider Line
            ctx.strokeStyle = T.frontDivider;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(150, dividerY);
            ctx.lineTo(width - 150, dividerY);
            ctx.stroke();

            // Calculate 12-Grid Slot Dimensions
            const cols = 4;
            const rows = 3;
            const startX = 60;
            const startY = dividerY + 30;
            const gridW = width - 120;
            const gridH = height - startY - 80;

            const gap = 16;
            const slotW = (gridW - (gap * (cols - 1))) / cols;
            const slotH = (gridH - (gap * (rows - 1))) / rows;

            // Render Each Slot Image & Plaque
            state.slots.forEach((slot, index) => {
                const r = Math.floor(index / cols);
                const c = index % cols;
                const x = startX + c * (slotW + gap);
                const y = startY + r * (slotH + gap);

                // Slot Card Background
                ctx.fillStyle = T.frontSlotBg;
                ctx.fillRect(x, y, slotW, slotH);

                // Photo Frame Border
                ctx.strokeStyle = T.frontSlotFrame;
                ctx.lineWidth = 3;
                ctx.strokeRect(x, y, slotW, slotH);

                // Image Drawing Area
                const photoH = state.settings.showNames ? slotH - 36 : slotH;

                ctx.save();
                ctx.beginPath();
                ctx.rect(x + 3, y + 3, slotW - 6, photoH - 3);
                ctx.clip();

                if (slot.image && slot.image.complete) {
                    const img = slot.image;
                    const aspect = img.width / img.height;
                    let drawW = slotW * slot.zoom;
                    let drawH = (slotW / aspect) * slot.zoom;

                    if (drawH < photoH * slot.zoom) {
                        drawH = photoH * slot.zoom;
                        drawW = (photoH * aspect) * slot.zoom;
                    }

                    const imgX = x + (slotW - drawW) / 2 + slot.panX;
                    const imgY = y + (photoH - drawH) / 2 + slot.panY;

                    ctx.drawImage(img, imgX, imgY, drawW, drawH);
                } else {
                    // Fallback placeholder pattern
                    ctx.fillStyle = T.frontSlotPlaceholder;
                    ctx.fillRect(x, y, slotW, photoH);
                    ctx.fillStyle = T.frontSlotPlaceholderText;
                    ctx.font = '14px "Inter", sans-serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(`Slot #${slot.id}`, x + slotW / 2, y + photoH / 2);
                }
                ctx.restore();

                // Name Plaque Banner
                if (state.settings.showNames) {
                    const plaqueY = y + photoH;
                    const plaqueH = 48;

                    ctx.fillStyle = T.frontPlaqueBg;
                    ctx.fillRect(x, plaqueY, slotW, plaqueH);

                    ctx.strokeStyle = T.frontSlotFrame;
                    ctx.lineWidth = 2;
                    ctx.strokeRect(x, plaqueY, slotW, plaqueH);

                    ctx.fillStyle = T.frontTitleColor;
                    ctx.font = 'bold 16px "Playfair Display", Georgia, serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(slot.name, x + slotW / 2, plaqueY + plaqueH / 2);
                    ctx.textBaseline = 'alphabetic';
                }
            });

            // Footer Stamp / Souvenir Text
            ctx.fillStyle = T.frontFooterPrimary;
            ctx.font = '13px "Inter", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('WHITE STAR SOUVENIR WORKS • FIRST CLASS HEIRESS • 1912 SOUVENIR VIEWCARD', width / 2, height - 56);
            ctx.fillStyle = T.frontFooterSecondary;
            ctx.font = '10px "Inter", sans-serif';
            ctx.fillText('In Memory of the Titanic — the Ship, the Film & the 1500 Souls', width / 2, height - 38);
        }

        /* Bound free-text inputs so a runaway paste can never overflow the canvas */
        function clampText(text, maxChars) {
            if (typeof text !== 'string') return '';
            // Collapse whitespace runs (including newlines) and trim
            const collapsed = text.replace(/\s+/g, ' ').trim();
            return collapsed.length > maxChars ? collapsed.slice(0, maxChars) : collapsed;
        }

        /* Wrap canvas text to a pixel width, preserving empty lines */
        function wrapCanvasText(ctx, text, maxWidth) {
            if (!text) return [''];
            const words = text.split(/\s+/);
            const wrapped = [];
            let currentLine = '';
            words.forEach(word => {
                const testLine = currentLine ? currentLine + ' ' + word : word;
                if (!currentLine || ctx.measureText(testLine).width <= maxWidth) {
                    currentLine = testLine;
                } else {
                    wrapped.push(currentLine);
                    currentLine = word;
                }
            });
            wrapped.push(currentLine);
            return wrapped;
        }

        /* Draw Authentic Vintage Postcard Back Canvas */
        function renderBackCanvas() {
            const canvas = document.getElementById('backCanvas');
            const ctx = canvas.getContext('2d');
            const T = CARD_TEMPLATES[state.cardTemplate];

            const width = 1200;
            const height = 800; // Standard 3:2 postcard proportion

            canvas.width = width;
            canvas.height = height;

            // Background Texture
            const bgGrad = ctx.createLinearGradient(0, 0, width, height);
            T.backBg.forEach((color, i) => bgGrad.addColorStop(i / (T.backBg.length - 1), color));
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, width, height);

            // Outer Deckled Paper Border
            ctx.strokeStyle = T.backBorder;
            ctx.lineWidth = T.backBorderWidth;
            ctx.strokeRect(15, 15, width - 30, height - 30);

            // Center Dividing Line
            ctx.strokeStyle = T.backDivider;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(width / 2, 60);
            ctx.lineTo(width / 2, height - 60);
            ctx.stroke();

            // White Star Line Watermark / Header Logo
            ctx.fillStyle = T.backHeaderColor;
            ctx.font = 'bold 24px "Playfair Display", Georgia, serif';
            ctx.textAlign = 'center';
            ctx.fillText('WHITE STAR LINE', width / 4, 80);

            ctx.font = '12px "Inter", sans-serif';
            ctx.fillText('ROYAL & UNITED STATES MAIL STEAMERS', width / 4, 105);

            // Postcard Title Center Header
            ctx.font = 'bold 36px "Playfair Display", Georgia, serif';
            ctx.fillText('POST CARD', width / 2, 50);

            // Left Handwritten Message Text Area (word-wrapped to stay left of the center divider)
            ctx.fillStyle = T.backMessageColor;
            ctx.font = '28px "Caveat", cursive, sans-serif';
            ctx.textAlign = 'left';

            const maxMsgWidth = width / 2 - 100;
            const msgLines = state.postcard.message.split('\n')
                .flatMap(rawLine => wrapCanvasText(ctx, rawLine, maxMsgWidth));

            let lineY = 150;
            for (const line of msgLines) {
                if (lineY > height - 110) break; // never draw past the bottom of the card
                ctx.fillText(line, 60, lineY);
                lineY += 38;
            }

            // Sender Signature Line (renders the Sender Name field)
            ctx.fillStyle = T.backSenderColor;
            const senderText = `From: ${state.postcard.sender}`;
            let senderFontSize = 26;
            ctx.font = `italic ${senderFontSize}px "Caveat", cursive, sans-serif`;
            while (ctx.measureText(senderText).width > maxMsgWidth && senderFontSize > 12) {
                senderFontSize -= 2;
                ctx.font = `italic ${senderFontSize}px "Caveat", cursive, sans-serif`;
            }
            ctx.fillText(senderText, 60, height - 50);

            // Right Recipient Address Lines & Text
            const addrX = width / 2 + 60;
            ctx.fillStyle = T.backSenderColor;
            ctx.font = '12px "Inter", sans-serif';
            ctx.fillText('ADDRESS ONLY TO BE WRITTEN HERE', addrX, 220);

            // Draw Address Lines
            ctx.strokeStyle = T.backAddressLineColor;
            ctx.lineWidth = 1;
            for (let i = 0; i < 4; i++) {
                const y = 320 + (i * 65);
                ctx.beginPath();
                ctx.moveTo(addrX, y);
                ctx.lineTo(width - 80, y);
                ctx.stroke();
            }

            // Recipient Text Rendering (wrapped within the address column)
            ctx.fillStyle = T.backMessageColor;
            ctx.font = '30px "Caveat", cursive, sans-serif';
            const maxAddrWidth = width - 80 - (addrX + 10);
            const recipientLines = state.postcard.recipient.split('\n');
            recipientLines.slice(0, 4).forEach((rLine, i) => {
                wrapCanvasText(ctx, rLine, maxAddrWidth).slice(0, 2).forEach((part, j) => {
                    ctx.fillText(part, addrX + 10, 310 + (i * 65) + (j * 34));
                });
            });

            // Stamp Box Top Right
            const stampX = width - 200;
            const stampY = 60;
            const stampW = 130;
            const stampH = 160;

            ctx.fillStyle = '#fff';
            ctx.fillRect(stampX, stampY, stampW, stampH);

            ctx.strokeStyle = T.backStampBorder;
            ctx.lineWidth = 3;
            ctx.strokeRect(stampX, stampY, stampW, stampH);

            // Stamp Internal Graphic
            if (state.postcard.stampStyle === 'royal_1d') {
                ctx.fillStyle = '#991b1b'; // Royal Red Stamp
                ctx.fillRect(stampX + 8, stampY + 8, stampW - 16, stampH - 16);

                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 16px "Playfair Display", serif';
                ctx.textAlign = 'center';
                ctx.fillText('POSTAGE', stampX + stampW / 2, stampY + 30);

                ctx.font = '900 40px "Font Awesome 6 Free", sans-serif';
                ctx.fillText('\uf007', stampX + stampW / 2, stampY + 90);

                ctx.font = 'bold 18px "Playfair Display", serif';
                ctx.fillText('ONE PENNY', stampX + stampW / 2, stampY + 140);
            } else if (state.postcard.stampStyle === 'white_star') {
                ctx.fillStyle = '#1e3a8a';
                ctx.fillRect(stampX + 8, stampY + 8, stampW - 16, stampH - 16);

                ctx.fillStyle = '#fef3c7';
                ctx.font = '900 36px "Font Awesome 6 Free", sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('\uf005', stampX + stampW / 2, stampY + 80);

                ctx.font = 'bold 14px "Playfair Display", serif';
                ctx.fillText('WHITE STAR', stampX + stampW / 2, stampY + 130);
            } else {
                ctx.fillStyle = '#78350f';
                ctx.fillRect(stampX + 8, stampY + 8, stampW - 16, stampH - 16);

                ctx.fillStyle = '#fef3c7';
                ctx.font = '900 36px "Font Awesome 6 Free", sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('\uf21a', stampX + stampW / 2, stampY + 80);

                ctx.font = 'bold 13px "Playfair Display", serif';
                ctx.fillText('TITANIC 1912', stampX + stampW / 2, stampY + 130);
            }

            // Authentic Postmark Circular Overlay Stamp
            ctx.save();
            ctx.translate(stampX - 30, stampY + 50);
            ctx.rotate(-15 * Math.PI / 180);

            ctx.strokeStyle = T.backPostmarkColor;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(0, 0, 55, 0, Math.PI * 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(0, 0, 48, 0, Math.PI * 2);
            ctx.stroke();

            ctx.fillStyle = T.backPostmarkColor;
            ctx.textAlign = 'center';

            // Render the editable Postmark Date & Port field inside the ring (auto-shrinks to fit)
            const postmarkParts = state.postcard.postmarkDate
                .split('•').map(s => s.trim()).filter(Boolean).slice(0, 3);
            const postmarkYOffsets = postmarkParts.length === 1 ? [0]
                : postmarkParts.length === 2 ? [-15, 15] : [-28, 0, 28];
            postmarkParts.forEach((part, i) => {
                let fontSize = 10;
                ctx.font = `bold ${fontSize}px "Inter", sans-serif`;
                while (ctx.measureText(part).width > 96 && fontSize > 6) {
                    fontSize -= 1;
                    ctx.font = `bold ${fontSize}px "Inter", sans-serif`;
                }
                ctx.fillText(part, 0, postmarkYOffsets[i]);
            });

            // Wavy Postmark Cancellation Lines
            ctx.beginPath();
            for (let i = -3; i <= 3; i++) {
                ctx.moveTo(55, i * 12);
                ctx.lineTo(160, i * 12);
            }
            ctx.stroke();

            ctx.restore();
        }

        /* Draw Single-Piece Double-Sided Combined Print Sheet Canvas */
        function renderCombinedCanvas() {
            const canvas = document.getElementById('combinedCanvas');
            const ctx = canvas.getContext('2d');
            const T = CARD_TEMPLATES[state.cardTemplate];

            // Standard Printable Sheet Aspect Ratio (A4 proportions: 1600 x 2262)
            const width = 1600;
            const height = 2262;

            canvas.width = width;
            canvas.height = height;

            // Crisp White Paper Sheet
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);

            // Outer Margin Guide Border
            ctx.strokeStyle = '#e2e8f0';
            ctx.lineWidth = 2;
            ctx.strokeRect(40, 40, width - 80, height - 80);

            // Title Banner on Printable Page
            ctx.fillStyle = '#0f172a';
            ctx.font = 'bold 28px "Playfair Display", Georgia, serif';
            ctx.textAlign = 'center';
            ctx.fillText('WHITE STAR SOUVENIR WORKS — SOUVENIR VIEWCARD & POSTCARD COMBINED PRINT SHEET', width / 2, 85);

            ctx.fillStyle = '#64748b';
            ctx.font = '14px "Inter", sans-serif';
            ctx.fillText('Print on a single sheet of paper. Cut along solid border or fold along center line for double-sided postcard!', width / 2, 115);

            // Generate Front and Back Source Canvases
            const frontSrc = document.getElementById('frontCanvas');
            const backSrc = document.getElementById('backCanvas');

            // Fit both cards onto one page while preserving each canvas' true aspect ratio
            const frontAspect = frontSrc.height / frontSrc.width;
            const backAspect = backSrc.height / backSrc.width;
            const foldGap = state.print.showCutMarks ? 100 : 60;
            const availableH = height - 160 - 60 - foldGap;

            const cardW = Math.min(1400, availableH / (frontAspect + backAspect));
            const cardHFront = cardW * frontAspect;
            const cardHBack = cardW * backAspect;

            const posX = (width - cardW) / 2;
            const posY1 = 160;

            // Draw Front Canvas onto Sheet
            ctx.drawImage(frontSrc, posX, posY1, cardW, cardHFront);

            // Draw Cut & Fold Line Guidelines
            if (state.print.showCutMarks) {
                const foldY = posY1 + cardHFront + 50;

                ctx.strokeStyle = T.combinedCutMark;
                ctx.lineWidth = 3;
                ctx.setLineDash([12, 8]);
                ctx.beginPath();
                ctx.moveTo(40, foldY);
                ctx.lineTo(width - 40, foldY);
                ctx.stroke();
                ctx.setLineDash([]); // Reset line dash

                // Center Fold Indicator Badge
                ctx.fillStyle = T.combinedFoldBadge;
                ctx.fillRect(width / 2 - 100, foldY - 14, 200, 28);
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 12px "Inter", sans-serif';
                ctx.fillText('✂️ FOLD / CUT HERE', width / 2, foldY + 4);

                const posY2 = foldY + 50;
                // Draw Back Canvas onto Sheet
                ctx.drawImage(backSrc, posX, posY2, cardW, cardHBack);

                // Draw Outer Cut Marks
                ctx.strokeStyle = '#0f172a';
                ctx.lineWidth = 2;
                ctx.strokeRect(posX, posY1, cardW, cardHFront);
                ctx.strokeRect(posX, posY2, cardW, cardHBack);
            } else {
                const posY2 = posY1 + cardHFront + foldGap;
                ctx.drawImage(backSrc, posX, posY2, cardW, cardHBack);
            }
        }

        /* Master Render Pipeline Call */
        function renderAll() {
            renderDragGrid();
            renderFrontCanvas();
            renderBackCanvas();
            renderCombinedCanvas();
        }

        /* View Mode Tab Switcher */
        function switchTab(tab) {
            state.activeTab = tab;

            const frontBtn = document.getElementById('tabFrontBtn');
            const backBtn = document.getElementById('tabBackBtn');
            const combinedBtn = document.getElementById('tabCombinedBtn');

            const frontContainer = document.getElementById('frontViewContainer');
            const backContainer = document.getElementById('backViewContainer');
            const combinedContainer = document.getElementById('combinedViewContainer');

            // Reset tab styling and ARIA
            [frontBtn, backBtn, combinedBtn].forEach(btn => {
                btn.className = "px-3 md:px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium text-slate-400 hover:text-slate-200 transition flex items-center gap-1.5 md:gap-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900";
                btn.setAttribute('aria-selected', 'false');
            });

            // Hide containers
            frontContainer.classList.add('hidden');
            backContainer.classList.add('hidden');
            combinedContainer.classList.add('hidden');

            const activeClass = "px-3 md:px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium transition flex items-center gap-1.5 md:gap-2 bg-amber-600 text-slate-950 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900";

            if (tab === 'front') {
                frontBtn.className = activeClass;
                frontBtn.setAttribute('aria-selected', 'true');
                frontContainer.classList.remove('hidden');
                document.getElementById('previewTitle').textContent = 'Front Viewcard Preview (12 Character Grid)';
                document.getElementById('previewSubtitle').textContent = 'Drag slots directly to reorder positions!';
                document.getElementById('previewModeIcon').className = 'fa-solid fa-border-all text-amber-400 text-lg';
            } else if (tab === 'back') {
                backBtn.className = activeClass;
                backBtn.setAttribute('aria-selected', 'true');
                backContainer.classList.remove('hidden');
                document.getElementById('previewTitle').textContent = 'Postcard Back Preview (1912 Design)';
                document.getElementById('previewSubtitle').textContent = 'Custom handwritten message, stamp and postmark overlay.';
                document.getElementById('previewModeIcon').className = 'fa-solid fa-envelope text-amber-400 text-lg';
            } else if (tab === 'combined') {
                combinedBtn.className = activeClass;
                combinedBtn.setAttribute('aria-selected', 'true');
                combinedContainer.classList.remove('hidden');
                document.getElementById('previewTitle').textContent = 'Single-Piece Printable Sheet (Front + Back)';
                document.getElementById('previewSubtitle').textContent = 'Arranged for single-page printing or double-sided folding.';
                document.getElementById('previewModeIcon').className = 'fa-solid fa-print text-amber-400 text-lg';
            }

            renderAll();
        }

        // Keyboard navigation for tab list
        document.addEventListener('keydown', function(e) {
            const tablist = document.querySelector('[role="tablist"]');
            if (!tablist || e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
            const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
            const currentIdx = tabs.indexOf(document.activeElement);
            if (currentIdx === -1) return;
            let nextIdx;
            if (e.key === 'ArrowRight') nextIdx = Math.min(currentIdx + 1, tabs.length - 1);
            else nextIdx = Math.max(currentIdx - 1, 0);
            tabs[nextIdx].focus();
            switchTab(['front','back','combined'][nextIdx]);
            e.preventDefault();
        });

        /* Settings Update Handlers */
        function updateViewcardSettings() {
            state.settings.aspectRatio = document.getElementById('aspectRatioSelect').value;
            state.settings.showNames = document.getElementById('showNamesSelect').value === 'true';

            // Bound free-text inputs so a runaway paste can never blow up the
            // canvas layout or the PNG export.
            state.settings.titleText = clampText(document.getElementById('viewcardTitleInput').value, 60);
            state.settings.quoteText = clampText(document.getElementById('customQuoteInput').value, 220);

            renderAll();
        }

        function applyQuotePreset(val) {
            if (val !== 'custom') {
                document.getElementById('customQuoteInput').value = val;
            }
            updateViewcardSettings();
        }

        function updatePostcardSettings() {
            state.postcard.message = document.getElementById('postcardMessageInput').value;
            state.postcard.sender = document.getElementById('postcardSenderInput').value;
            state.postcard.recipient = document.getElementById('postcardRecipientInput').value;
            state.postcard.stampStyle = document.getElementById('stampStyleSelect').value;
            state.postcard.postmarkDate = document.getElementById('postmarkDateInput').value;

            renderAll();
        }

        function updatePrintSettings() {
            state.print.paperSize = document.getElementById('paperSizeSelect').value;
            state.print.showCutMarks = document.getElementById('cutMarksSelect').value === 'true';

            renderAll();
        }

        /* Download Active Canvas View as PNG */
        function downloadActiveViewPNG() {
            let activeCanvas = document.getElementById('frontCanvas');
            let filename = 'White_Star_Souvenir_Works_Front_Viewcard.png';

            if (state.activeTab === 'back') {
                activeCanvas = document.getElementById('backCanvas');
                filename = 'White_Star_Souvenir_Works_Back_Postcard.png';
            } else if (state.activeTab === 'combined') {
                activeCanvas = document.getElementById('combinedCanvas');
                filename = 'White_Star_Souvenir_Works_1Page_Print_Sheet.png';
            }

            const dataURL = activeCanvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            showToast(`Downloaded ${filename}!`);
        }

        /* Trigger Browser High-Resolution Print Window */
        function printCombinedSheet() {
            renderAll();
            const combinedCanvas = document.getElementById('combinedCanvas');
            const printImg = document.getElementById('printImage');

            // Keep the <img> dimensions in sync with the source canvas so the
            // print layout doesn't reflow while the rasterized image loads.
            printImg.width = combinedCanvas.width;
            printImg.height = combinedCanvas.height;
            printImg.src = combinedCanvas.toDataURL('image/png');
            printImg.onload = () => {
                window.print();
            };
            printImg.onerror = () => {
                showToast("Could not prepare the print sheet. Try exporting as PNG instead.");
            };
        }

        /* Interface Theme Selector — Dark / Cream Templates */
        const THEMES = ['dark', 'cream'];
        const THEME_LABELS = { dark: 'Dark Template', cream: 'Cream Template' };

        function applyTheme(preference) {
            const html = document.documentElement;
            html.setAttribute('data-theme', preference);
            html.classList.toggle('dark', preference === 'dark');
            updateThemeButtons(preference);
        }

        function selectTheme(themeName) {
            if (!THEMES.includes(themeName)) return;
            localStorage.setItem('tvs-theme', themeName);
            applyTheme(themeName);
            showToast("Switched to " + THEME_LABELS[themeName]);
        }

        function updateThemeButtons(active) {
            const darkBtn  = document.getElementById('btnThemeDark');
            const creamBtn = document.getElementById('btnThemeCream');
            const isActiveDark   = active === 'dark';
            const isActiveCream  = active === 'cream';

            if (darkBtn) {
                darkBtn.setAttribute('aria-checked', String(isActiveDark));
                darkBtn.tabIndex = isActiveDark ? 0 : -1;
                darkBtn.className = isActiveDark
                    ? 'px-3 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 bg-amber-500 text-slate-950 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400'
                    : 'px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center gap-1.5 text-slate-400 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400';
            }
            if (creamBtn) {
                creamBtn.setAttribute('aria-checked', String(isActiveCream));
                creamBtn.tabIndex = isActiveCream ? 0 : -1;
                creamBtn.className = isActiveCream
                    ? 'px-3 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 bg-amber-500 text-slate-950 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400'
                    : 'px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center gap-1.5 text-slate-400 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400';
            }
        }

        (function initTheme() {
            const saved = localStorage.getItem('tvs-theme');
            const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            const theme = saved || (prefersLight ? 'cream' : 'dark');
            applyTheme(theme);
        })();

        (function initWatermarkYear() {
            const el = document.getElementById('watermarkYear');
            if (el) el.textContent = new Date().getFullYear();
        })();

        /* Show Floating Toast Message */
        function showToast(message) {
            const toast = document.getElementById('toastNotification');
            const toastMsg = document.getElementById('toastMsg');
            toastMsg.textContent = message;

            toast.classList.remove('translate-y-20', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');

            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
                toast.classList.remove('translate-y-0', 'opacity-100');
            }, 3000);
        }

        /* Window Initialization */
        window.onload = function() {
            // Wire up drag & drop upload on the drop zone
            const dropZone = document.getElementById('dropZone');
            ['dragenter', 'dragover'].forEach(evt => dropZone.addEventListener(evt, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropZone.classList.add('drag-over');
            }));
            dropZone.addEventListener('dragleave', (e) => {
                e.stopPropagation();
                dropZone.classList.remove('drag-over');
            });
            dropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropZone.classList.remove('drag-over');
                processFiles(e.dataTransfer.files);
            });

            // Initialize card template selector from stored value
            const ctSelect = document.getElementById('cardTemplateSelect');
            if (ctSelect) ctSelect.value = state.cardTemplate || 'dark_nautical';

            // Preload 12 sample cast placeholders
            loadSampleCast();
            loadSlotControls(1);
            renderAll();

            // Re-render once webfonts finish loading so canvas text uses the correct typefaces
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(() => renderAll());
            }
        };
