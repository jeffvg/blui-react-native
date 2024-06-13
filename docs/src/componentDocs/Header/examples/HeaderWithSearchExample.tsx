import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Header } from '@brightlayer-ui/react-native-components';

export const HeaderWithSearchExample = (): JSX.Element => (
    <ExampleShowcase>
        <Header
            title={'Valley Forge'}
            subtitle={'The Last Stand'}
            actionItems={[
                {
                    icon: { name: 'settings' },
                    onPress: () => { },
                },
                {
                    icon: { name: 'more-vert' },
                    onPress: () => { },
                },
            ]}
            searchableConfig={{ onChangeText: () => {} }}
        />

    </ExampleShowcase>
);