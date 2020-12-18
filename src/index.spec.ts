import { User } from './index'

const user = new User(1, 'fulno@user.com', 'Wpd@3a45', '_fulano')

test(`o usuario te senha forte`, () => {
    expect(user.strongPassword()).toBe(true)
})