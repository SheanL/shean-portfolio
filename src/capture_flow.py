from playwright.sync_api import sync_playwright
import os

out_dir = r'c:\Portfolio\src\assets\projects\zomerfestivals'
os.makedirs(out_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(
        executable_path=r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
        headless=True
    )
    page = browser.new_page(viewport={'width': 1280, 'height': 800})
    
    print('1. Logging in as admin...')
    page.goto('http://localhost:8080/login')
    page.fill('input[name="username"]', 'admin')
    page.fill('input[name="password"]', 'admin')
    page.click('button[type="submit"], input[type="submit"]')
    page.wait_for_timeout(2000)

    # Step 1: Festivals Overview
    print('2. Capturing Festivals Overview...')
    page.goto('http://localhost:8080/festivals')
    page.wait_for_timeout(1500)
    p1 = os.path.join(out_dir, 'step1-festivals-overview.png')
    page.screenshot(path=p1)
    print(f'Captured step1-festivals-overview.png ({os.path.getsize(p1)/1024:.1f} KB)')

    # Step 2: Add Performance Form (try /performances/add/1 or first link)
    print('3. Navigating to Add Performance form...')
    add_links = page.query_selector_all('a[href*="/performances/add"]')
    if add_links:
        add_url = add_links[0].get_attribute('href')
        page.goto('http://localhost:8080' + add_url if not add_url.startswith('http') else add_url)
    else:
        page.goto('http://localhost:8080/performances/add/1')
    page.wait_for_timeout(1500)
    
    p2 = os.path.join(out_dir, 'step2-add-performance.png')
    page.screenshot(path=p2)
    print(f'Captured step2-add-performance.png ({os.path.getsize(p2)/1024:.1f} KB)')

    # Step 3: Fill performance form and submit if available
    try:
        if page.is_visible('input[name="artistName"]'):
            page.fill('input[name="artistName"]', 'Martin Garrix')
            # Select or submit
            page.click('button[type="submit"], input[type="submit"]')
            page.wait_for_timeout(2000)
    except Exception as e:
        print('Form fill note:', e)

    p3 = os.path.join(out_dir, 'step3-added-result.png')
    page.screenshot(path=p3)
    print(f'Captured step3-added-result.png ({os.path.getsize(p3)/1024:.1f} KB)')

    # Step 4: 404 Error page demo
    print('4. Capturing 404 Error demo...')
    page.goto('http://localhost:8080/non-existent-page-demo-404')
    page.wait_for_timeout(1000)
    p4 = os.path.join(out_dir, 'step4-error-404.png')
    page.screenshot(path=p4)
    print(f'Captured step4-error-404.png ({os.path.getsize(p4)/1024:.1f} KB)')

    browser.close()
